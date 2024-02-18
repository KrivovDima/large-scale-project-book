import { configFilesMap } from "./config-files-map";
import { ConfigInterface } from "./models/Config.interface";
import { getAppConfigKey } from "./utils";

const appConfigKey = getAppConfigKey();

if (!configFilesMap.has(appConfigKey)) {
    throw Error(
        `Could not find config for VITE_APP_CONFIG key "${appConfigKey}"`
    );
}

export const config = configFilesMap.get(appConfigKey) as ConfigInterface;
