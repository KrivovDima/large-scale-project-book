import {
    HttpContentTypes,
    HttpRequestMethods,
    HttpRequestType,
} from "./Constants";
import { HttpClientInterface } from "./HttpClient.interface";
import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";
import { ParamsType, UrlUtils } from "./UrlUtils";

export class HttpClientFetch implements HttpClientInterface {
    constructor() {}

    async request<R, P extends ParamsType = {}>(
        parameters: HttpRequestParamsInterface<P>
    ): Promise<R> {
        const {
            endpoint,
            requestType,
            requiresToken,
            headers,
            mockDelay,
            payload = {},
        } = parameters;

        const fullUrl = UrlUtils.getFullUrlWithParams(endpoint, payload);

        const options: RequestInit = {
            credentials: "include",
            redirect: "follow",
            headers: {},
        };

        if (headers) {
            options.headers = { ...headers };
        }
        if (
            !Object.prototype.hasOwnProperty.call(
                options.headers,
                "Content-Type"
            )
        ) {
            options.headers = {
                ...headers,
                "Content-Type": HttpContentTypes.applicationJson,
            };
        }
        if (requiresToken) {
            // options.headers.Authorization = `bearer ${ JwtHelpers.getJwtToken() }`
        }

        let result!: R;

        const checkRedirect = async (response: Response) => {
            if (response.redirected) {
                document.location = response.url;
                return true;
            }

            return false;
        };

        try {
            switch (requestType) {
                case HttpRequestType.get: {
                    options.method = HttpRequestMethods.get;
                    const response = await fetch(fullUrl, options);
                    const redirected = await checkRedirect(response);

                    if (!redirected) {
                        result = (await response.json()) as R;
                    }
                    break;
                }
                case HttpRequestType.post: {
                    options.method = HttpRequestMethods.post;
                    options.body =
                        typeof payload === "string"
                            ? payload
                            : JSON.stringify(payload);
                    const response = await fetch(fullUrl, options);
                    const redirected = await checkRedirect(response);

                    if (!redirected) {
                        result = (await response.json()) as R;
                    }
                    break;
                }
                case HttpRequestType.put: {
                    options.method = HttpRequestMethods.put;
                    options.body =
                        typeof payload === "string"
                            ? payload
                            : JSON.stringify(payload);
                    const response = await fetch(fullUrl, options);
                    const redirected = await checkRedirect(response);

                    if (!redirected) {
                        result = (await response.json()) as R;
                    }
                    break;
                }
                case HttpRequestType.patch: {
                    options.method = HttpRequestMethods.patch;
                    options.body =
                        typeof payload === "string"
                            ? payload
                            : JSON.stringify(payload);
                    const response = await fetch(fullUrl, options);
                    const redirected = await checkRedirect(response);

                    if (!redirected) {
                        result = (await response.json()) as R;
                    }
                    break;
                }
                case HttpRequestType.delete: {
                    options.method = HttpRequestMethods.delete;
                    const response = await fetch(fullUrl, options);
                    const redirected = await checkRedirect(response);

                    if (!redirected) {
                        result = (await response.json()) as R;
                    }
                    break;
                }
                default: {
                    console.warn(
                        "HttpClientFetch: invalid requestType argument or request type not implemented"
                    );
                }
            }
        } catch (error) {
            console.error("HttpClientFetch: exception", error);
            throw new Error("HttpClientFetch: exception");
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
