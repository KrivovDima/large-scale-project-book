export type ParamsType = Record<string, string | number>;

export interface UrlUtilsInterface {
    getFullUrlWithParams(baseUrl: string, params: ParamsType): string;
}

export const UrlUtils: UrlUtilsInterface = {
    getFullUrlWithParams(baseUrl, params) {
        const keys: string[] = Object.keys(params);

        if (baseUrl.indexOf("[") === -1 || keys.length === 0) {
            return baseUrl;
        }

        let fullUrl = baseUrl;
        keys.forEach((key) => {
            fullUrl = fullUrl.replace(
                `[${key}]`,
                (params[key] || "null").toString()
            );
        });

        return fullUrl;
    },
};
