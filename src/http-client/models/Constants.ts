export enum HttpRequestType {
    get,
    post,
    put,
    patch,
    delete,
}

export const HttpContentTypes = Object.freeze({
    applicationJson: "application/json",
    formUrlEncoded: "application/x-www-form-urlencoded;charset=UTF-8",
});

export const HttpRequestMethods = Object.freeze({
    get: "GET",
    post: "POST",
    put: "PUT",
    delete: "DELETE",
    patch: "PATCH",
});
