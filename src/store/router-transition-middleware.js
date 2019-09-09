import {CALL_HISTORY_METHOD, LOCATION_CHANGE} from "connected-react-router";
import loadRouteData from "../load-route-data";
import {matchRoutes} from "react-router-config";
// import {matchPath} from "react-router-dom";
import routes from "../routes";

const routerTransitionMiddleware = history => store => next => async action => {
    if (action.type !== CALL_HISTORY_METHOD) {
        return next(action);
    }

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
    } = action || {}

    const {
        dispatch
    } = store;
    const toRoute = pathname || payload.args[0];
 
    const matchingRoutes = matchRoutes(routes, toRoute);
    // const matchingRoutes = matchPath(toRoute, {path: "/animals/:animalName"});
    console.log("matchingRoutes: ", matchingRoutes);

    await Promise.all(loadRouteData(matchingRoutes, dispatch));

    console.log("intercepted connected-react-router. action: ", action, "payload: ", payload);
    console.log("state: ", store.getState());

    next(action);
}

export default routerTransitionMiddleware;
