import Home from "./home";
import Animals from "./animals";
import { fetchAnimalData } from "./store/thunks";
import App from "./app";
import React from "react";

const testRoutes = Array.apply(null, new Array(100)).map((val, index) => {
    const Component = () => <h1>I'm at path /test-{index}</h1>;

    return {
        path: `/test-${index}`,
        component: Component
    };
});

const routes = [
    {

        component: App,
        routes: [
            {
                path: "/",
                exact: true,
                component: Home
            },
            {
                path: "/home",
                component: Home
            },
            {
                path: "/animals/:animalName",
                strict: false,
                component: Animals,
                loadData: async (dispatch, data) => {
                    return await fetchAnimalData(data)(dispatch);
                }
            },
            ...testRoutes
        ]
    }
];

export default routes;
