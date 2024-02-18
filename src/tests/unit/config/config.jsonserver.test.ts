import { configFilesMap } from "@/config/config-files-map";
import { ConfigInterface } from "@/config/models/Config.interface";
import { testingConfig } from "./utils";

describe("config: jsonserver", () => {
    const config: ConfigInterface = configFilesMap.get(
        "jsonserver"
    ) as ConfigInterface;

    testingConfig(config);
});
