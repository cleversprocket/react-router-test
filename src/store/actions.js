import { createAction } from "redux-actions";

export const FETCH_ANIMAL = "myapp/animal/fetch-animal";
export const FETCH_ANIMAL_SUCCESS = "myapp/animal/fetch-animal-success";
export const FETCH_ANIMAL_FAILURE = "myapp/animal/fetch-animal-failure";

export const fetchAnimalAction = createAction(FETCH_ANIMAL);
export const fetchAnimalSuccessAction = createAction(FETCH_ANIMAL_SUCCESS);
export const fetchAnimalFailureAction = createAction(FETCH_ANIMAL_FAILURE);
