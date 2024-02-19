import "./App.css";
import { Provider } from "react-redux";
import { rootStore } from "./store";
import ItemsView from "./views/Items.view";
import { useLocalization } from "./localization";

function App() {
    const { changeLocale, t, locales, currentLocale } = useLocalization();

    const onLocaleClick = (lcid: string) => {
        changeLocale(lcid);
    };

    return (
        <Provider store={rootStore}>
            <div className="App">
                <div className="locale-selector">
                    {locales.map(({ key }) => {
                        const radioId = `radio-locale-${key}`;

                        return (
                            <label
                                key={key}
                                htmlFor={radioId}
                                className="cursor-pointer"
                                onClick={() => onLocaleClick(key)}
                            >
                                <input
                                    type="radio"
                                    name="locale"
                                    id={radioId}
                                    radioGroup={currentLocale}
                                    value={key}
                                    checked={currentLocale === key}
                                    onChange={() => {}}
                                />
                                {t(`locale.selector.${key}`)}
                            </label>
                        );
                    })}
                </div>
                <h1>{t("home.welcome")}</h1>
                <ItemsView />
            </div>
        </Provider>
    );
}

export default App;
