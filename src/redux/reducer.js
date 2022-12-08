
import {ADD_PRODUCT, DELETE_PRODUCT} from './store'

const initialState = {
    myFavorites: [],
}
const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){

        case ADD_PRODUCT:
        //    const pay =  state.myFavorites.push(payload) 
            return {
                ...state,
                myFavorites:[...state.myFavorites, payload],
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((e)=> e.id !== payload)
            }
            default:
                return{...state };
    }
}
export default rootReducer;