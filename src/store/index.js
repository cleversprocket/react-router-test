import animalReducer from "./animal-reducer";
import { combineReducers, applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
    animal: animalReducer
});

const generateStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxThunk)
    );
};

export default generateStore;
