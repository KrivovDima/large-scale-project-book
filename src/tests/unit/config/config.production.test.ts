import { configFilesMap } from "@/config/config-files-map";
import { ConfigInterface } from "@/config/models/Config.interface";
import { testingConfig } from "./utils";

describe("config: production", () => {
    const config: ConfigInterface = configFilesMap.get(
        "production"
    ) as ConfigInterface;

    testingConfig(config);
});
