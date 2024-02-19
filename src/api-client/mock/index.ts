import { ApiClientInterface } from "../models/ApiClient.interface";
import { itemsApiClient } from "./items";
import { localizationApiClient } from "./localization";

const apiMockClient: ApiClientInterface = {
    items: itemsApiClient,
    localization: localizationApiClient,
};

export { apiMockClient };
