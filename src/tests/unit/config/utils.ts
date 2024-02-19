import { ConfigInterface } from "@/config/models/Config.interface";

export const testingConfig = (config: ConfigInterface) => {
    it("instance should have 'global' section", () => {
        expect(config).toHaveProperty("global");
    });

    it("instance should have 'httpClient' section", () => {
        expect(config).toHaveProperty("httpClient");
    });

    it("instance should have 'apiClient' section", () => {
        expect(config).toHaveProperty("apiClient");
    });

    it("instance should have 'items' section", () => {
        expect(config).toHaveProperty("items");
    });

    it("instance should have 'localization' section", () => {
        expect(config).toHaveProperty("localization");
    });

    describe("global", () => {
        const section = config.global;

        it("section should have 'version' property", () => {
            expect(section).toHaveProperty("version");
            expect(typeof section.version).toBe("number");
            expect(section.version).toBeGreaterThan(0);
        });
    });

    describe("httpClient", () => {
        const section = config.httpClient;

        it("section should have 'tokenKey' property", () => {
            expect(section).toHaveProperty("tokenKey");
        });

        it("section should have 'clientType' property", () => {
            expect(section).toHaveProperty("clientType");
        });
    });

    describe("apiClient", () => {
        const section = config.apiClient;

        it("section should have 'type' property", () => {
            expect(section).toHaveProperty("type");
        });
    });

    describe("items", () => {
        const section = config.items;

        it("section should have 'apiClientOptions' property", () => {
            expect(section).toHaveProperty("apiClientOptions");
        });

        describe("apiClientOptions", () => {
            const apiClientOptions = section.apiClientOptions;

            it("apiClientOptions should have 'endpoints' property", () => {
                expect(apiClientOptions).toHaveProperty("endpoints");
            });

            describe("endpoints", () => {
                const endpoints = apiClientOptions.endpoints;

                it('endpoints should have "fetchItems" property', () => {
                    expect(endpoints).toHaveProperty("fetchItems");
                    expect(typeof endpoints.fetchItems).toBe("string");
                });
            });
        });
    });

    describe("localization", () => {
        const section = config.localization;

        it('section should have "apiClientOptions" property', () => {
            expect(section).toHaveProperty("apiClientOptions");
        });

        it('section should have "locales" property', () => {
            expect(section).toHaveProperty("locales");
        });

        it('section should have "localStorageCache" property', () => {
            expect(section).toHaveProperty("localStorageCache");
        });

        describe("apiClientOptions", () => {
            const apiClientOptions = section.apiClientOptions;

            it("apiClientOptions should have 'endpoints' property", () => {
                expect(apiClientOptions).toHaveProperty("endpoints");
            });

            describe("endpoints", () => {
                const endpoints = apiClientOptions.endpoints;

                it('endpoints should have "fetchTranslation" property', () => {
                    expect(endpoints).toHaveProperty("fetchTranslation");
                    expect(typeof endpoints.fetchTranslation).toBe("string");
                });
            });
        });

        describe("locales", () => {
            const locales = section.locales;

            it("locales should be not empty array", () => {
                expect(locales).toBeInstanceOf(Array);
                expect(locales).not.toHaveLength(0);
            });

            describe("locale", () => {
                const locale = locales[0];

                it('locale should have "key" property', () => {
                    expect(locale).toHaveProperty("key");
                    expect(typeof locale.key).toBe("string");
                });

                it('locale should have "isDefault" property', () => {
                    expect(locale).toHaveProperty("isDefault");
                    expect(typeof locale.isDefault).toBe("boolean");
                });
            });
        });

        describe("localStorageCache", () => {
            const localStorageCache = section.localStorageCache;

            it('localStorageCache should have "enabled" property', () => {
                expect(localStorageCache).toHaveProperty("enabled");
                expect(typeof localStorageCache.enabled).toBe("boolean");
            });

            it('localStorageCache should have "expirationInMinutes" property', () => {
                expect(localStorageCache).toHaveProperty("expirationInMinutes");
                expect(typeof localStorageCache.expirationInMinutes).toBe(
                    "number"
                );
            });
        });
    });
};
