import { ItemsApiClientOptions } from "@/api-client/models/items";
import { LocalizationApiClientOptions } from "@/api-client/models/localization";

export interface HttpClientConfigInterface {
    tokenKey: string;
    clientType: "axios" | "fetch";
}

export interface ConfigInterface {
    global: {
        version: number;
    };
    httpClient: HttpClientConfigInterface;
    apiClient: {
        type: string;
    };
    localization: {
        apiClientOptions: LocalizationApiClientOptions;
        locales: { key: string; isDefault: boolean }[];
        localStorageCache: { enabled: boolean; expirationInMinutes: number };
    };
    items: {
        apiClientOptions: ItemsApiClientOptions;
    };
}
