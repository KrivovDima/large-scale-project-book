import { configFilesMap } from "@/config/config-files-map";
import { ConfigInterface } from "@/config/models/Config.interface";
import { testingConfig } from "./utils";

describe("config: mock", () => {
    const config: ConfigInterface = configFilesMap.get(
        "mock"
    ) as ConfigInterface;

    testingConfig(config);
});
