import { ItemsApiClientInterface } from "./items";
import { LocalizationApiClientInterface } from "./localization";

export interface ApiClientInterface {
    items: ItemsApiClientInterface;
    localization: LocalizationApiClientInterface;
}
