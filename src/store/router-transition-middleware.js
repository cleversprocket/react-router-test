import { CALL_HISTORY_METHOD, LOCATION_CHANGE } from "connected-react-router";
import loadRouteData from "../load-route-data";
import { matchRoutes } from "react-router-config";
// import {matchPath} from "react-router-dom";
import routes from "../routes";

const routerTransitionMiddleware = history => store => next => async action => {
    console.log("intercepted connected-react-router. action: ", action);
    const {
        type, 
        payload: {
            action: navAction
        } = {}
    } = action;

    let passThrough = true;

    if (type === CALL_HISTORY_METHOD) {
        passThrough = false;
    } else if (type === LOCATION_CHANGE && navAction === "POP") {
        passThrough = false;
    }



    if (passThrough) {
        console.log("Passing " + type + " through via " + navAction);
        return next(action);
    }

    console.log("NOT Passing " + type + " through via " + navAction);
    console.log("---------------------------------------------------------");
    console.log("");


    const {
        payload,
        payload: {
            location: {
                args,
                pathname,
            } = {},
            action: historyAction,
            isFirstRendering
        } = {}
    } = action || {};

    const {
        dispatch
    } = store;
    const toRoute = pathname || payload.args[0];
 
    const matchingRoutes = matchRoutes(routes, toRoute);

    await Promise.all(loadRouteData(matchingRoutes, dispatch));

    next(action);
};

export default routerTransitionMiddleware;
