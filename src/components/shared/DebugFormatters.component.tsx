import { useLocalization } from "@/localization";
import { useDateTimeFormatters } from "@/localization/formatters/useDateTimeFormatters";
import { useNumberFormatters } from "@/localization/formatters/useNumberFormatters";

type Props = {
    show: boolean;
};

export const DebugFormatters = ({ show }: Props) => {
    const { currentLocale } = useLocalization();

    const dateTimeFormatter = (
        dateStyle: string = "long",
        timeStyle: string = ""
    ) => useDateTimeFormatters(currentLocale).dateTime(dateStyle, timeStyle);
    const dayNames = () =>
        useDateTimeFormatters(currentLocale)
            .dayNames()
            ?.map(({ name }) => name)
            .join(",");
    const monthNames = () =>
        useDateTimeFormatters(currentLocale)
            .monthNames()
            ?.map(({ name }) => name)
            .join(",");

    const wholeNumberFormatter = () =>
        useNumberFormatters(currentLocale).whole();
    const decimalNumberFormatter = () =>
        useNumberFormatters(currentLocale).decimal();
    const currencyNumberFormatter = (currency: string = "USD") =>
        useNumberFormatters(currentLocale).currency({ currency });
    const percentNumberFormatter = () =>
        useNumberFormatters(currentLocale).percent();

    return (
        show && (
            <div>
                <h3>Debugging formatters:</h3>
                <div>
                    Whole: {wholeNumberFormatter().format(123456789.321654)}
                </div>
                <div>
                    Decimal: {decimalNumberFormatter().format(123456789.321654)}
                </div>
                <div>
                    percent: {percentNumberFormatter().format(1254.987654)}
                </div>
                <div>
                    currency (USD):{" "}
                    {currencyNumberFormatter().format(123456789.321654)}
                </div>
                <div>
                    currency (CAD):{" "}
                    {currencyNumberFormatter("CAD").format(123456789.321654)}
                </div>
                <div>
                    currency (EUR):{" "}
                    {currencyNumberFormatter("EUR").format(123456789.321654)}
                </div>
                <div>
                    currency (CNY):{" "}
                    {currencyNumberFormatter("CNY").format(123456789.321654)}
                </div>
                <div>
                    currency (JPY):{" "}
                    {currencyNumberFormatter("JPY").format(123456789.321654)}
                </div>
                <div>
                    currency (INR):{" "}
                    {currencyNumberFormatter("INR").format(123456789.321654)}
                </div>
                <div>
                    currency (CHF):{" "}
                    {currencyNumberFormatter("CHF").format(123456789.321654)}
                </div>
                <div>
                    date-time (default):
                    {dateTimeFormatter().format(new Date())}
                </div>
                <div>
                    date-time (full):
                    {dateTimeFormatter("full").format(new Date())}
                </div>
                <div>
                    date-time (full+long time):
                    {dateTimeFormatter("full", "long").format(new Date())}
                </div>
                <div>day names: {dayNames()}</div>
                <div>month names: {monthNames()}</div>
            </div>
        )
    );
};
