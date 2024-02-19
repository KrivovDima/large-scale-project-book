import { config } from "@/config";
import { ItemsApiClientModel, LocalizationApiClientModel } from "../models";
import { ApiClientInterface } from "../models/ApiClient.interface";

const apiLiveClient: ApiClientInterface = {
    items: new ItemsApiClientModel(config.items.apiClientOptions),
    localization: new LocalizationApiClientModel(
        config.localization.apiClientOptions
    ),
};

export { apiLiveClient };
