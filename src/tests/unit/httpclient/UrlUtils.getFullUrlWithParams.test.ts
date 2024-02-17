import { UrlUtils } from "@/http-client";

describe("UrlUtils: getFullUrlWithParams", () => {
    it("should return full url formatted as expected with one param", () => {
        const endpoint = "https://unit-test-api/v1/domain/[catalogId]";
        const params = {
            catalogId: 5346782,
        };
        const result = UrlUtils.getFullUrlWithParams(endpoint, params);

        expect("https://unit-test-api/v1/domain/5346782").toEqual(result);
    });

    it("should return full url formatted as expected with multiply params", () => {
        const endpoint =
            "https://unit-test-api/v1/domain/[country]/[state]/[cityId]";
        const params = {
            country: "USA",
            state: "NY",
            cityId: "gtref345ytr",
        };
        const result = UrlUtils.getFullUrlWithParams(endpoint, params);

        expect("https://unit-test-api/v1/domain/USA/NY/gtref345ytr").toEqual(
            result
        );
    });
});
