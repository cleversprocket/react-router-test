import {CALL_HISTORY_METHOD, LOCATION_CHANGE} from "connected-react-router";

const routerTransitionMiddleware = history => store => next => action => {
    if (action.type !== CALL_HISTORY_METHOD && action.type !== LOCATION_CHANGE) {
        return next(action);
    }

    const {
        payload
    } = action

    console.log("intercepted connected-react-router. action: ", action, "payload: ", payload);
    return next(action);
}

export default routerTransitionMiddleware;
