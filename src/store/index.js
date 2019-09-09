import animalReducer from "./animal-reducer";
import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import reduxThunk from "redux-thunk";
import { createBrowserHistory, createMemoryHistory } from 'history';
import { connectRouter, routerMiddleware } from "connected-react-router";
import routerTransitionMiddleware from "./router-transition-middleware";

export const isServer = !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

const generateStore = (initialState = {}, url = "/") => {
    const history = isServer
        ? createMemoryHistory({
            initialEntries: [url]
        })
        : createBrowserHistory();

    const enhancers = [];

    if (process.env.NODE_ENV === 'development' && !isServer) {
        const devToolsExtension = window.devToolsExtension;

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }

    const rootReducer = combineReducers({
        animals: animalReducer,
        env: (state = {}) => {
            return {
                ...state,
                isServer
            }
        },
        router: connectRouter(history)
    });

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(reduxThunk, routerTransitionMiddleware(history), routerMiddleware(history)),
            ...enhancers
        )
    );

    return {
        store,
        history
    };
};

export default generateStore;
