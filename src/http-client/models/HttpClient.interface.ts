import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";
import { ParamsType } from "./UrlUtils";

export interface HttpClientConfigInterface {
    tokenKey: string;
    clientType: string;
}

export interface HttpClientInterface {
    request<R, P extends ParamsType = {}>(
        parameters: HttpRequestParamsInterface<P>
    ): Promise<R>;
}
