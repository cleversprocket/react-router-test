import Home from "./home";
import Animals from "./animals";
import { fetchAnimalData } from "./store/thunks";
import App from "./app";

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
                component: Animals
            }]
    }
];


export default routes;
