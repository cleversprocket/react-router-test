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
    console.log("");
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

    const navAction = historyMethod || browserAction;
    const isPopState = type === LOCATION_CHANGE && navAction.toLowerCase() === "pop";
    let passThrough = true;

    if (!isFirstRendering)  {
        if (type === CALL_HISTORY_METHOD) {
            passThrough = false;
        } else if (isPopState) {
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

    if (isPopState) {
        // We need to grab from the cache and load it in state synchronously
        next(action);
    } else {
        await Promise.all(loadRouteData(matchingRoutes, dispatch));
        next(action);
    }
};

export default routerTransitionMiddleware;
