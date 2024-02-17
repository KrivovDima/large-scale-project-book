export interface ItemsApiClientEndpoints {
    fetchItems: string;
}

export interface ItemsApiClientOptions {
    endpoints: ItemsApiClientEndpoints;
    mockDelay?: number;
}
