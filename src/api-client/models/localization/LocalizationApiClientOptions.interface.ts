export interface LocalizationApiClientEndpoints {
    fetchTranslation: string;
}

export interface LocalizationApiClientOptions {
    endpoints: LocalizationApiClientEndpoints;
    mockDelay?: number;
}
