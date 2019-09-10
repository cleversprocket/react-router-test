import { CALL_HISTORY_METHOD, LOCATION_CHANGE } from "connected-react-router";
import loadRouteData from "../load-route-data";
import { matchRoutes } from "react-router-config";
import routes from "../routes";

// if (global.document) {
//     window.onpopstate = function (event) {
//         console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
//     };

// }

const routerTransitionMiddleware = history => store => next => async action => {
    console.log("intercepted connected-react-router. action: ", action);
    const {
        type, 
        payload: {
            args,
            action: browserAction,
            method: historyMethod,
            isFirstRendering,
            location: {
                pathname
            } = {}
        } = {}
    } = action;
    const {
        dispatch
    } = store;

    let passThrough = true;
    const navAction = historyMethod || browserAction;

    if (!isFirstRendering)  {
        if (type === CALL_HISTORY_METHOD) {
            passThrough = false;
        } else if (type === LOCATION_CHANGE && navAction.toLowerCase() === "pop") {
            passThrough = false;
        }
    }

    if (passThrough) {
        console.log("Passing " + type + " through via " + navAction + " for " + pathname);
        next(action);
        return
    }

    console.log("NOT Passing " + type + " through via " + navAction + " for " + pathname);
    console.log("---------------------------------------------------------");
    console.log("");

    const toRoute = pathname || args[0]; 
    const matchingRoutes = matchRoutes(routes, toRoute);

    await Promise.all(loadRouteData(matchingRoutes, dispatch));

    next(action);
};

export default routerTransitionMiddleware;
