import { apiLiveClient } from "./live";
import { apiMockClient } from "./mock";
import { ApiClientInterface } from "./models/ApiClient.interface";

let env = "mock";

if (import.meta.env && import.meta.env.readonlyVITE_API_CLIENT) {
    env = import.meta.env.readonlyVITE_API_CLIENT.trim();
}

let apiClient: ApiClientInterface;

if (env === "live") {
    apiClient = apiLiveClient;
} else {
    apiClient = apiMockClient;
}

export { apiClient };
