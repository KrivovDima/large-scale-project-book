import "./App.css";
import { Provider } from "react-redux";
import { rootStore } from "./store";
import ItemsView from "./views/Items.view";

function App() {
    return (
        <Provider store={rootStore}>
            <div className="App">
                [{JSON.stringify(import.meta.env)}]
                <ItemsView />
            </div>
        </Provider>
    );
}

export default App;
