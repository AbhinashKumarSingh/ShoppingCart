import Cookie from "js-cookie";
import {createStore,combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/CartReducers';
import { productListReducer,productDetailsReducer, productSaveReducer } from './reducers/productReducers';
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";

const cartItems= Cookie.get("cartItems")|| [];
const userInfo=Cookie.get("userInfo")|| null;

const initialState={cart:{cartItems},userSignin:{userInfo}}

const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    productSave:productSaveReducer
})


const store=createStore(reducer,initialState,compose(applyMiddleware(thunk)));

export default store
