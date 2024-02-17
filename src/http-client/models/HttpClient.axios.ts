import axios, { AxiosRequestConfig } from "axios";
import { HttpClientInterface } from "./HttpClient.interface";
import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";
import { UrlUtils } from "./UrlUtils";
import { HttpRequestType } from "./Constants";

export class HttpClientAxios implements HttpClientInterface {
    constructor() {}

    async request<R, P = void>(
        parameters: HttpRequestParamsInterface<P>
    ): Promise<R> {
        const {
            endpoint,
            requestType,
            requiresToken,
            headers,
            mockDelay,
            payload,
        } = parameters;

        const fullUrl = UrlUtils.getFullUrlWithParams(endpoint, payload);
        console.log("HttpClientAxios: fullUrl: ", fullUrl, payload);

        const options: AxiosRequestConfig = {
            headers: {},
            maxRedirects: 0,
        };

        if (headers) {
            options.headers = { ...headers };
        }
        if (requiresToken) {
            options.withCredentials = true;
        }

        let result!: R;

        try {
            switch (requestType) {
                case HttpRequestType.get: {
                    const response = await axios.get<R>(fullUrl, options);
                    result = response?.data;
                    break;
                }
                case HttpRequestType.post: {
                    const response = await axios.post<R>(
                        fullUrl,
                        payload,
                        options
                    );
                    result = response?.data;
                    break;
                }
                case HttpRequestType.put: {
                    const response = await axios.put<R>(
                        fullUrl,
                        payload,
                        options
                    );
                    result = response?.data;
                    break;
                }
                case HttpRequestType.patch: {
                    const response = await axios.patch<R>(
                        fullUrl,
                        payload,
                        options
                    );
                    result = response?.data;
                    break;
                }
                case HttpRequestType.delete: {
                    const response = await axios.delete(fullUrl, options);
                    result = response?.data;
                    break;
                }
                default: {
                    console.warn(
                        "HttpClientAxios: invalid requestType argument or request type not implemented"
                    );
                }
            }
        } catch (error) {
            // console.error("HttpClientAxios: exception", error);
            throw Error("HttpClientAxios: exception");
        }

        if (mockDelay ?? 0 > 0) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result);
                }, mockDelay);
            });
        }

        return result;
    }
}
