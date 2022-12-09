
import {ADD_PRODUCT, DELETE_PRODUCT, FILTER, ORDER} from './store'

const initialState = {
    myFavorites: [],
    allCharacter: [],
}
const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){

        case ADD_PRODUCT:
        //    const pay =  state.myFavorites.push(payload) 
        console.log(state.allCharacter);
            return {
                ...state,
                allCharacter:[...state.allCharacter, payload],
                myFavorites:[...state.allCharacter, payload],
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((e)=> e.id !== payload)
            }
        case FILTER:
                return{
                    ...state,
                    myFavorites: state.allCharacter.filter((ch)=> ch.gender === payload)
                }
        case ORDER:
            const ordenes = payload === 'Ascendiente' ? [...state.myFavorites.sort(
                (a,b) => {
                    if(a.name < b.name) return -1
                    if(a.name > b.name) return 1
                    return 0})] 
                    :
                    [...state.myFavorites.sort(
                        (a,b) => {
                            if(a.name < b.name) return 1
                            if(a.name > b.name) return -1
                            return 0})] 
                    return{
                        ...state,
                        myFavorites: ordenes
                    }
            default:
                return{...state };
    } 
}
export default rootReducer;