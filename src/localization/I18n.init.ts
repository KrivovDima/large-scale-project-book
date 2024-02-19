import { apiClient } from "@/api-client";
import { config } from "@/config";
import { initReactI18next } from "react-i18next";
import i18n, {
    BackendModule,
    Services,
    TOptions,
    InitOptions,
    ReadCallback,
} from "i18next";

const localStorageConfig = config.localization.localStorageCache;

export const userPreferredLocaleStorageKey = "user-lcid";

export const getUserPreferredLocale = () => {
    const availableLocales = config.localization.locales;
    const preferredLocale = localStorage.getItem(userPreferredLocaleStorageKey);

    if (!preferredLocale) {
        return availableLocales.find((locale) => locale.isDefault)?.key;
    }

    return preferredLocale;
};

export const setUserPreferredLocale = (lcid: string) => {
    localStorage.setItem(userPreferredLocaleStorageKey, lcid);
};

export const getLocaleData = async (
    namespace: string,
    lcid: string
): Promise<Object> => {
    const localStorageKey = `lcid-data-${lcid}`;
    const cacheEntryStr = localStorage.getItem(localStorageKey) ?? "{}";
    let cacheEntry: { appVersion: number; expiresAt: number; json: string } = {
        appVersion: -1,
        expiresAt: 0,
        json: "",
    };

    if (localStorageConfig.enabled) {
        try {
            cacheEntry = JSON.parse(cacheEntryStr);
        } catch (error) {
            console.warn("error parsing data", cacheEntryStr);
        }
    }

    if (
        cacheEntry &&
        cacheEntry.appVersion === config.global.version &&
        cacheEntry.expiresAt - Date.now() > 0
    ) {
        return cacheEntry.json;
    } else {
        const translationData = await apiClient.localization.fetchTranslation(
            namespace,
            lcid
        );

        if (localStorageConfig.enabled) {
            const dt = new Date();
            const expiresAt = dt.setMinutes(
                dt.getMinutes() + Number(localStorageConfig.expirationInMinutes)
            );
            localStorage.setItem(
                localStorageKey,
                JSON.stringify({
                    expiresAt,
                    json: translationData,
                    appVersion: config.global.version,
                })
            );
        }

        return translationData;
    }
};

const backendModule: BackendModule = {
    type: "backend",
    init(
        services: Services,
        backendOptions: TOptions,
        i18nextOptions: InitOptions
    ): void {
        console.log(
            "backendModule init",
            services,
            backendOptions,
            i18nextOptions
        );
    },
    read(language: string, namespace: string, callback: ReadCallback) {
        console.log("backendModule read", language, namespace);

        const key = language;
        getLocaleData(namespace, key).then((res) => callback(null, res));
    },
};

i18n.use(initReactI18next)
    .use(backendModule)
    .init({
        lng: getUserPreferredLocale(),
        fallbackLng: "en-US",
        keySeparator: false,
        interpolation: { escapeValue: false },
        load: "currentOnly",
    });
