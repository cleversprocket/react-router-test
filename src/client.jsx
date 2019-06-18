import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import generateStore from "./store";
import React from "react";
import ReactDOM from "react-dom";
import routes from "./routes";

const store = generateStore(window.__INITIAL_DATA__);

window.store = store;
delete window.__INITIAL_DATA__;

const component = (
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>
);

ReactDOM.hydrate(component, document.getElementById("main"));
