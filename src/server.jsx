import App from "./index";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Hapi from "hapi";

const init = () => {
    const server = Hapi.server({
        host: "localhost",
        port: 3000
    });

    server.route({
        method: "GET",
        path: "/",
        handler: () => {
            return ReactDOMServer.renderToString(<App name />);
        }
    });

    server.start();
};

init();
