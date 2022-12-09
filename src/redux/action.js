import { ADD_PRODUCT, DELETE_PRODUCT, FILTER, ORDER } from "./store";

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
};
export function filterCards (status){
    return{
        type: FILTER,
        payload: status,
    }
};
export function orderCards (id){
    return {
        type: ORDER,
        payload: id,
    }
};
