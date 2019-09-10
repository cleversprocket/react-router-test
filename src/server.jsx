import { matchRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import animalData from "../data/animals.json";
import appTemplate from "./index.html.hbs";
import generateStore from "./store";
import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";
import React from "react";
import ReactDOMServer from "react-dom/server";
import routes from "./routes";
import loadRouteData from "./load-route-data";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const init = async () => {
    const server = Hapi.server({
        host: "localhost",
        port: 3000
    });

    await server.register(Inert);

    server.route([
        {
            method: "GET",
            path: "/api/animals/{animalName}",
            handler: async (request) => {
                await sleep(2000);

                try {
                    const animalName = request.params.animalName;
                    const data = animalData[animalName];

                    return JSON.stringify([data]);
                } catch (e) {
                    return e;
                }
            }
        },
        {
            path: "/favicon.ico",
            method: "get",
            config: {
                auth: false,
                cache: {
                    expiresIn: 1000 * 60 * 60 * 24 * 21
                }
            },
            handler: function(request, h) {
                return h.response()
                    .code(204)
                    .type("image/x-icon");
            }
        },
        {
            method: "GET",
            path: "/public/{path*}",
            handler: {
                directory: {
                    path: "./dist/public/",
                    redirectToSlash: true,
                    index: true
                }
            }
        },
        {
            method: "GET",
            path: "/{p*}",
            handler: async (request) => {
                try {
                    const { store } = generateStore({}, request.url.pathname);
                    const context = {};
                    
                    const matchingRoutes = matchRoutes(
                        routes,
                        request.url.pathname
                    );

                    const dataCalls = loadRouteData(matchingRoutes, store.dispatch);

                    await Promise.all(dataCalls);

                    const markup = ReactDOMServer.renderToString(
                        <Provider store={store} >
                            <StaticRouter context={context} location={request.url.pathname}>
                                {renderRoutes(routes)}
                            </StaticRouter>
                        </Provider>
                    );

                    const initialData = store.getState();
                    const fullHTML = appTemplate({
                        initialData: JSON.stringify(initialData),
                        markup
                    });

                    return fullHTML;
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.log(e);
                }
            }
        }
    ]);

    await server.start();

    // eslint-disable-next-line no-console
    console.log("Server online at localhost:3000");
};

init();
