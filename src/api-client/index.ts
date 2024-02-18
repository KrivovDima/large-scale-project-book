import { config } from "@/config";
import { apiLiveClient } from "./live";
import { apiMockClient } from "./mock";
import { ApiClientInterface } from "./models/ApiClient.interface";

let apiClient: ApiClientInterface;

if (config.apiClient.type === "live") {
    apiClient = apiLiveClient;
} else {
    apiClient = apiMockClient;
}

export { apiClient };
