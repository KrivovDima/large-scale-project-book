const defaultCurrencyDisplay = "symbol"; // 'symbol', 'narrowSymbol', 'code', 'name'

export const getNumberFormattersCacheKey = (params: {
    lcid: string;
    style?: string;
    currency?: string;
    currencyDisplay?: string;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
}) => {
    let {
        lcid,
        maximumFractionDigits,
        minimumFractionDigits,
        currency,
        currencyDisplay,
        style,
    } = params;

    style = (style ?? "decimal").trim().toLowerCase();
    currency = (currency ?? "").trim();
    currencyDisplay = (currencyDisplay ?? defaultCurrencyDisplay).trim();
    let cacheKey = `${lcid}-${style}`;

    if (currency) {
        cacheKey = `${cacheKey}-${currency}-${currencyDisplay}`;
    }

    return `${cacheKey}-${minimumFractionDigits}-${maximumFractionDigits}`
        .trim()
        .toLowerCase();
};

export const useNumberFormatters = (localeId: string) => {
    const _lcid = localeId;
    const _cache = new Map<string, Intl.NumberFormat>();

    const _privateGetFormatter = (params: {
        style?: string;
        currency?: string;
        currencyDisplay?: string;
        minimumFractionDigits: number;
        maximumFractionDigits: number;
    }) => {
        let {
            maximumFractionDigits,
            minimumFractionDigits,
            currency,
            currencyDisplay,
            style,
        } = params;
        style = (style ?? "decimal").trim().toLowerCase();
        currency = (currency ?? "").trim();
        currencyDisplay = (currencyDisplay ?? defaultCurrencyDisplay).trim();

        const cacheKey = getNumberFormattersCacheKey({
            lcid: _lcid,
            maximumFractionDigits,
            minimumFractionDigits,
            currency,
            currencyDisplay,
            style,
        });

        if (!_cache.has(cacheKey)) {
            const options: Intl.NumberFormatOptions = {
                style,
                minimumFractionDigits,
                maximumFractionDigits,
            };

            if (currency) {
                options.currency = currency;
                options.currencyDisplay = currencyDisplay;
            }

            const instance = new Intl.NumberFormat(_lcid, options);
            _cache.set(cacheKey, instance);
        }

        return _cache.get(cacheKey) as Intl.NumberFormat;
    };

    return {
        whole: () =>
            _privateGetFormatter({
                style: "decimal",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
            }),
        decimal: (
            minimumFractionDigits: number = 0,
            maximumFractionDigits: number = 2
        ) =>
            _privateGetFormatter({
                maximumFractionDigits,
                minimumFractionDigits,
                style: "decimal",
            }),
        currency: ({
            currency,
            maximumFractionDigits = 2,
            minimumFractionDigits = 0,
            currencyDisplay,
        }: {
            currency: string;
            currencyDisplay?: string;
            minimumFractionDigits?: number;
            maximumFractionDigits?: number;
        }) =>
            _privateGetFormatter({
                style: "currency",
                maximumFractionDigits,
                minimumFractionDigits,
                currency,
                currencyDisplay,
            }),
        percent: (
            minimumFractionDigits: number = 0,
            maximumFractionDigits: number = 2
        ) =>
            _privateGetFormatter({
                style: "percent",
                maximumFractionDigits,
                minimumFractionDigits,
            }),
        unescapeResult: (result: string) =>
            result.replace(/\xa0/g, " ").replace(/\u202f/g, " "),
    };
};
