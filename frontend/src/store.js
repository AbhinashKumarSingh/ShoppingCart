import {createStore,combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/CartReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';

const initialState={}

const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer
})


const store=createStore(reducer,initialState,compose(applyMiddleware(thunk)));

export default store
