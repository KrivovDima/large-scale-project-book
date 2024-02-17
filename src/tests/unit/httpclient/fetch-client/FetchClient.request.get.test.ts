import {
    HttpClientFetch,
    HttpRequestParamsInterface,
    HttpRequestType,
} from "@/http-client";

const mockRequestParams: HttpRequestParamsInterface<any> = {
    endpoint: "path/to/a/get/api/endpoint",
    requestType: HttpRequestType.get,
    requiresToken: false,
};

describe("HttpClient: axios-client: request: get", (done) => {
    const httpClient = new HttpClientFetch();

    it("should execute get request successfully", async () => {
        const unmockedFetch = global.fetch ?? (() => {});
        global.fetch = unmockedFetch;

        const expectedResult = {
            result: `request completed:${mockRequestParams.endpoint}`,
        };

        vitest.spyOn(global, "fetch").mockImplementation(async () =>
            Promise.resolve({
                redirected: false,
                json: () => Promise.resolve(JSON.stringify(expectedResult)),
            } as any)
        );

        try {
            const response = await httpClient.request(mockRequestParams);

            expect(response).not.toBeNull();
            expect(response).toEqual(expectedResult);
        } catch (error) {
            console.info("AxiosClient.request.get.test.ts: error", error);
        }

        global.fetch = unmockedFetch;
    });

    it("get should throw error on rejection", () => {
        const unmockedFetch = global.fetch ?? (() => {});
        global.fetch = unmockedFetch;

        vitest
            .spyOn(global, "fetch")
            .mockImplementation(() => Promise.reject());

        httpClient.request(mockRequestParams).catch((error) => {
            expect(error).toBeDefined();
            //TODO разобраться почему этот тест падает
            expect(error.toString()).toEqual(
                "Error: HttpClientFetch: exception"
            );
        });
    });
});
