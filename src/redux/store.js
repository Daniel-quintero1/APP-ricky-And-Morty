import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducer';
export const ADD_PRODUCT ='ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const GET_STORE_NAME = 'GET_STORE_NAME';


const store = createStore( rootReducer, applyMiddleware(thunk));

export default store;