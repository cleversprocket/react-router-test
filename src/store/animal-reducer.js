import {
    FETCH_ANIMAL,
    FETCH_ANIMAL_FAILURE,
    FETCH_ANIMAL_SUCCESS
} from "./actions";
import { handleActions } from "redux-actions";

const fetchAnimalReducer = (state) => {
    return {
        ...state,
        isFetching: true,
    };
};

const fetchAnimalSuccessReducer = (state, action) => {
    return {
        ...state,
        isFetching: false,
        ...action.payload
    };
};

const fetchAnimalFailureReducer = (state, action) => {
    return {
        ...state,
        isFetching: false,
        error: action.error
    };
};

const reducer = handleActions({
    [FETCH_ANIMAL]: fetchAnimalReducer,
    [FETCH_ANIMAL_SUCCESS]: fetchAnimalSuccessReducer,
    [FETCH_ANIMAL_FAILURE]: fetchAnimalFailureReducer
}, {});

export default reducer;
