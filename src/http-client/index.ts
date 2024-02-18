import { config } from "@/config";
import {
    HttpClientAxios,
    HttpClientFetch,
    HttpClientInterface,
} from "./models";

export * from "./models";

let _httpClient: HttpClientInterface | undefined = undefined;

export const useHttpClient = () => {
    if (!_httpClient) {
        const clientType = config.httpClient.clientType;

        if (clientType === "fetch") {
            _httpClient = new HttpClientFetch();
        }
        if (clientType === "axios") {
            _httpClient = new HttpClientAxios();
        }
    }

    return _httpClient as HttpClientInterface;
};
