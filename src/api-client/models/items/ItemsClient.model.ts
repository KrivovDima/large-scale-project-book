import { ItemInterface } from "@/models/items/Item.interface";
import { ItemsApiClientInterface } from "./ItemsApiClient.interface";
import {
    ItemsApiClientEndpoints,
    ItemsApiClientOptions,
} from "./ItemsApiClientOptions.interface";
import {
    HttpRequestParamsInterface,
    HttpRequestType,
    useHttpClient,
} from "@/http-client";

export class ItemsApiClientModel implements ItemsApiClientInterface {
    private readonly endpoints!: ItemsApiClientEndpoints;
    private readonly mockDelay: number = 0;

    constructor({ endpoints, mockDelay }: ItemsApiClientOptions) {
        this.endpoints = endpoints;

        if (mockDelay) {
            this.mockDelay = mockDelay;
        }
    }

    fetchItems(): Promise<ItemInterface[]> {
        const requestParams: HttpRequestParamsInterface = {
            requestType: HttpRequestType.get,
            endpoint: this.endpoints.fetchItems,
            requiresToken: false,
            mockDelay: this.mockDelay,
        };

        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useHttpClient().request<ItemInterface[]>(requestParams);
    }
}
