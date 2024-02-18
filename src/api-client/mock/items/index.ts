import { config } from "@/config";
import { ItemsApiClientModel } from "../../models/items";

const itemsApiClient = new ItemsApiClientModel(config.items.apiClientOptions);

export { itemsApiClient };
