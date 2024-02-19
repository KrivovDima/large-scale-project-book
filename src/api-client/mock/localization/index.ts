import { LocalizationApiClientModel } from "@/api-client/models";
import { config } from "@/config";

const localizationApiClient = new LocalizationApiClientModel(
    config.localization.apiClientOptions
);

export { localizationApiClient };
