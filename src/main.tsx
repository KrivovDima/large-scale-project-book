import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./localization/I18n.init";
import "./tailwind/app.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Suspense fallback="loading...">
            <App />
        </Suspense>
    </React.StrictMode>
);
