import Home from "./home";
import Animals from "./animals";
import Animal from "./animal";
import { fetchAnimalData } from "./store/thunks";
import App from "./app";
import React from "react";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
        loadData: async (dispatch, data) => {
            await sleep(2000);
            console.log("Fetched App");
            return Promise.resolve();
        },
        routes: [
            {
                path: "/",
                exact: true,
                component: Home,
                loadData: async (dispatch, data) => {
                    await sleep(2000);
                    console.log("Fetched home route");
                    return Promise.resolve();
                }
            },                        
            {
                path: "/home",               
                component: Home
            },
            {
                path: "/animals",
                exact: true,
                component: Animal,
                loadData: async (dispatch, data) => {
                    await sleep(2000);
                    console.log("Fetched root animal data");
                    return Promise.resolve();
                },
            },
            {
                path: "/animals/:animalName",
                component: Animals,
                loadData: async (dispatch, data) => {
                    console.log("Fetched animals/:animalName");
                    return await fetchAnimalData(data)(dispatch);
                }
            },                      
        ]
    }
];

export default routes;
