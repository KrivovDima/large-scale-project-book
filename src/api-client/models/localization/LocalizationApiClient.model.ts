import {
    HttpRequestParamsInterface,
    HttpRequestType,
    useHttpClient,
} from "@/http-client";
import { LocalizationApiClientInterface } from "./LocalizationApiClient.interface";
import {
    LocalizationApiClientEndpoints,
    LocalizationApiClientOptions,
} from "./LocalizationApiClientOptions.interface";

export class LocalizationApiClientModel
    implements LocalizationApiClientInterface
{
    private readonly endpoints!: LocalizationApiClientEndpoints;
    private readonly mockDelay: number = 0;

    constructor({ endpoints, mockDelay }: LocalizationApiClientOptions) {
        this.endpoints = endpoints;

        if (mockDelay) {
            this.mockDelay = mockDelay;
        }
    }

    fetchTranslation(
        namespace: string,
        key: string
    ): Promise<{ [key: string]: string }> {
        const requestParams: HttpRequestParamsInterface = {
            endpoint: this.endpoints.fetchTranslation,
            requestType: HttpRequestType.get,
            requiresToken: false,
            payload: { namespace, key },
            mockDelay: this.mockDelay,
        };

        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useHttpClient().request<{ [key: string]: string }>(
            requestParams
        );
    }
}
