import { configFilesMap } from "@/config/config-files-map";
import { ConfigInterface } from "@/config/models/Config.interface";
import { testingConfig } from "./utils";

describe("config: localapis", () => {
    const config: ConfigInterface = configFilesMap.get(
        "localapis"
    ) as ConfigInterface;

    testingConfig(config);
});
