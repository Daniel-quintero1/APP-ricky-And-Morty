import { ADD_PRODUCT, DELETE_PRODUCT } from "./store";


export function AddPersonaje (personaje){
    return {
        type: ADD_PRODUCT,
        payload: personaje,
    }

}

export function DeletePersonaje (ID) {
    return{
        type: DELETE_PRODUCT,
        payload: ID,
    }

}