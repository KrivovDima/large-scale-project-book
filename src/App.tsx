import { Provider } from "react-redux";
import { rootStore } from "./store";
import { useLocalization } from "./localization";
import { DebugFormatters } from "./components/shared/DebugFormatters.component";
import { PrimitivesView } from "./views/Primitives.view";
import ItemsView from "./views/Items.view";
import { Counter, SampleComp } from "my-component-library";
import { randomId } from "@dkrivov/my-js-helpers";

function App() {
    const { changeLocale, t, locales, currentLocale } = useLocalization();

    const onLocaleClick = (lcid: string) => {
        changeLocale(lcid);
    };

    return (
        <Provider store={rootStore}>
            <div>
                <SampleComp text="This is a sample component from my-component-library" />
                <Counter />
                <p>[randomId() result (from my-js-helpers): {randomId()}]</p>
            </div>
            <div className="app m-2 p-2 border-2 border-red-500">
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
                <PrimitivesView />
                <DebugFormatters show />
            </div>
        </Provider>
    );
}

export default App;
