import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./providers"
import { BrowserRouter } from "react-router-dom";

import "./styles/reset.css";
import GlobalStyle from "./styles/global";

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <BrowserRouter>
                <App/>
                <GlobalStyle/>
            </BrowserRouter>
        </Providers>
    </React.StrictMode>,
    document.getElementById("root")
);
