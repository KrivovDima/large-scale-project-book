import { configFilesMap } from "@/config/config-files-map";
import { ConfigInterface } from "@/config/models/Config.interface";
import { testingConfig } from "./utils";

describe("config: beta", () => {
    const config: ConfigInterface = configFilesMap.get(
        "beta"
    ) as ConfigInterface;

    testingConfig(config);
});
