import fetch from "isomorphic-fetch";
import {
    fetchAnimalAction,
    fetchAnimalSuccessAction,
    fetchAnimalFailureAction
} from "./actions";

export const fetchAnimalData = (animalName) => {
    return async (dispatch) => {
        const url = `http://localhost:3000/api/animals/${animalName}`;
        try {
            dispatch(fetchAnimalAction());

            const response = await fetch(url);
            const data = await response.json();

            dispatch(fetchAnimalSuccessAction(data));
        } catch(e) {
            dispatch(fetchAnimalFailureAction(e));
        }
    };
};
