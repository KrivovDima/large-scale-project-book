export type DayNameFormatType = "long" | "short" | "narrow" | undefined;
export type MonthNameFormatType =
    | "long"
    | "short"
    | "narrow"
    | "numeric"
    | "2-digit"
    | undefined;

const defaultDateStyle = "short";

export const getDateTimeFormattersCacheKey = (params: {
    lcid: string;
    dateStyle?: string;
    timeStyle?: string;
}) => {
    let { lcid, dateStyle, timeStyle } = params;
    dateStyle = (dateStyle ?? defaultDateStyle).trim().toLowerCase();
    timeStyle = (timeStyle ?? "").trim().toLowerCase();

    let cacheKey = `${lcid}-${dateStyle}`;

    if (timeStyle.length) {
        cacheKey = `${cacheKey}-${timeStyle}`;
    }

    return cacheKey.trim().toLowerCase();
};

export const useDateTimeFormatters = (localeId: string) => {
    const _lcid = localeId;
    const _cache = new Map<string, Intl.DateTimeFormat>();

    const _cacheDayNames = new Map<string, { id: number; name: string }[]>();
    const _cacheMonthNames = new Map<string, { id: number; name: string }[]>();

    return {
        dateTime: (dateStyle?: string, timeStyle?: string) => {
            dateStyle = (dateStyle ?? defaultDateStyle).trim().toLowerCase();
            timeStyle = (timeStyle ?? "").trim().toLowerCase();

            const cacheKey = getDateTimeFormattersCacheKey({
                lcid: _lcid,
                dateStyle,
                timeStyle,
            });

            if (!_cache.has(cacheKey)) {
                const options: { dateStyle?: string; timeStyle?: string } = {};
                if (dateStyle.length) {
                    options.dateStyle = dateStyle;
                }
                if (timeStyle.length) {
                    options.timeStyle = timeStyle;
                }

                const instance = new Intl.DateTimeFormat(
                    _lcid,
                    options as Intl.DateTimeFormatOptions
                );
                _cache.set(cacheKey, instance);
            }

            return _cache.get(cacheKey) as Intl.DateTimeFormat;
        },
        dayNames: (format: DayNameFormatType = "long") => {
            if (!_cacheDayNames.has(format)) {
                const items: { id: number; name: string }[] = [];

                for (let i = 0; i < 7; i++) {
                    const strDay = (i + 1).toString().padStart(2, "0");
                    const date = new Date(`1970-03-${strDay}T00:00:00.000Z`);
                    const name = date.toLocaleDateString(_lcid, {
                        weekday: format,
                        timeZone: "UTC",
                    });

                    items.push({ id: i, name });
                }
                _cacheDayNames.set(format, items);
            }

            return _cacheDayNames.get(format);
        },
        monthNames: (format: MonthNameFormatType = "long") => {
            if (!_cacheMonthNames.has(format)) {
                const items: { id: number; name: string }[] = [];

                for (let i = 0; i < 12; i++) {
                    const strDay = (i + 1).toString().padStart(2, "0");
                    const date = new Date(`1970-${strDay}-01T00:00:00.000Z`);
                    const name = date.toLocaleDateString(_lcid, {
                        month: format,
                        timeZone: "UTC",
                    });

                    items.push({ id: i, name });
                }
                _cacheMonthNames.set(format, items);
            }

            return _cacheMonthNames.get(format);
        },
    };
};
