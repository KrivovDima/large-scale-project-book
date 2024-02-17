import { ItemsApiClientModel, ItemsApiClientOptions } from "../../models/items";

const options: ItemsApiClientOptions = {
    endpoints: { fetchItems: "/jsonserver/items" },
    mockDelay: 1000,
};

const itemsApiClient = new ItemsApiClientModel(options);

export { itemsApiClient };
