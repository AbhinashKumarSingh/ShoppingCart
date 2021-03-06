import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_Fail, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS } from "../constants/productConstants"
import axios from "axios";
const listProducts=()=>async(dispatch)=>{
    try{
     dispatch({type:PRODUCT_LIST_REQUEST});
     const {data}= await axios.get("/api/products");
     dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});
    }
    catch(error){
        dispatch({type:PRODUCT_LIST_Fail,payload:error});
    }

}

const saveProduct=(product)=>async(dispatch,getState)=>{
    try{
        console.log(product)
        dispatch({type:PRODUCT_SAVE_REQUEST,payload:product});
        const {userSignin:{userInfo}}=getState()
        const {data}=await axios.post('/api/products',product,{
            headers:{
                'Authorization':'Bearer'+ userInfo.token
            }
        });
        dispatch({type:PRODUCT_SAVE_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:PRODUCT_SAVE_FAIL,payload:error.message})
    }
}

const detailsProduct=(productId)=>async(dispatch)=>{
        try{
            dispatch({type:PRODUCT_DETAILS_REQUEST,payload:productId});
            const {data}=await axios.get("/api/products/"+productId);
            
            dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data});

        }
        catch(error){
            dispatch({type:PRODUCT_DETAILS_FAIL,payload:error});
        }
}


export {listProducts,saveProduct,detailsProduct}