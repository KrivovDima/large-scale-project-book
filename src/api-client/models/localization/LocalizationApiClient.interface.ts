export interface LocalizationApiClientInterface {
    fetchTranslation: (
        namespace: string,
        key: string
    ) => Promise<{ [key: string]: string }>;
}
