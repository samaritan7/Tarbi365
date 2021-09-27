import {createStore, combineReducers } from 'redux';
import { productListreducer } from './reducers/productreducers';


const initialState= {};
const reducer = combineReducers({
    productList: productListreducer,
})

const store = createStore(reducer, initialState);
export default store;