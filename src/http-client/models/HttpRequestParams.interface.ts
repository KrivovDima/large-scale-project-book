import { HttpRequestType } from "./Constants";
import { ParamsType } from "./UrlUtils";

export interface HttpRequestParamsInterface<P extends ParamsType = {}> {
    requestType: HttpRequestType;
    endpoint: string;
    requiresToken: boolean;
    headers?: { [key: string]: string };
    payload?: P;
    mockDelay?: number;
}
