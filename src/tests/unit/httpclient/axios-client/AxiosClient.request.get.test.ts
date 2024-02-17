import {
    HttpClientAxios,
    HttpRequestParamsInterface,
    HttpRequestType,
} from "@/http-client";
import axios from "axios";

const mockRequestParams: HttpRequestParamsInterface<any> = {
    endpoint: "path/to/a/get/api/endpoint",
    requestType: HttpRequestType.get,
    requiresToken: false,
};

describe("HttpClient: axios-client: request: get", () => {
    const httpClient = new HttpClientAxios();

    it("should execute get request successfully", () => {
        vitest.spyOn(axios, "get").mockImplementation(async () =>
            Promise.resolve({
                data: `request completed: ${mockRequestParams.endpoint}`,
            })
        );

        httpClient
            .request(mockRequestParams)
            .then((response) => {
                expect(response).toEqual(
                    `request completed: ${mockRequestParams.endpoint}`
                );
            })
            .catch((error) => {
                console.info("AxiosClient.request.get.test.ts: error", error);
            });
    });

    it("get should throw error on rejection", () => {
        vitest
            .spyOn(axios, "get")
            .mockImplementation(async () => Promise.reject());

        httpClient.request(mockRequestParams).catch((error: any) => {
            console.debug("errorVisible:", error);
            expect(error).toBeDefined();
        });
    });
});
