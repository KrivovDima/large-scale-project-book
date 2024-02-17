import {
    HttpClientAxios,
    HttpRequestParamsInterface,
    HttpRequestType,
} from "@/http-client";
import axios from "axios";

const mockRequestParams: HttpRequestParamsInterface<any> = {
    endpoint: "path/to/a/post/api/endpoint",
    requestType: HttpRequestType.post,
    requiresToken: false,
    payload: {},
};

type P = typeof mockRequestParams.payload;

describe("HttpClient: axios-client: request: post", () => {
    const httpClient = new HttpClientAxios();

    it("should execute post request successfully", () => {
        vitest.spyOn(axios, "post").mockImplementation(async () =>
            Promise.resolve({
                data: `request completed: ${mockRequestParams.endpoint}`,
            })
        );

        httpClient
            .request<string, P>(mockRequestParams)
            .then((response) => {
                expect(response).toEqual(
                    `request completed: ${mockRequestParams.endpoint}`
                );
            })
            .catch((error) => {
                console.info(
                    "AxiosClient.request.post.test.ts: post error",
                    error
                );
            });
    });
});
