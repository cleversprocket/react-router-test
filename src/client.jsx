import App from "./index";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

const component = (
    <Provider>
        <App />
    </Provider>
);

ReactDOM.hydrate(component, document.getElementById("content"));
