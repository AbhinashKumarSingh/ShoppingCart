import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts, saveProduct } from '../actions/productActions';
import { signin } from '../actions/userActions';

//import data from '../data';

function ProductsScreen(props){
    const [modalVisible,setModalVisible]=useState(false)
    const [name,setName]=useState("");
    const [id,setId]=useState("");
    const [price,setPrice]=useState("");
    const [image,setImage]=useState("");
    const [brand,setBrand]=useState("");
    const [rating,setRating]=useState("");
    const [numReviews,setNumReviews]=useState("");
    const [category,setCategory]=useState("");
    const [description,setDescription]=useState("");
    const [countInStock,setCountInStock]=useState("");
    
    const productSave=useSelector(state=>state.productSave)
    const productList=useSelector(state=>state.productList)
    const {loading,products,error}=productList
    const {loading:loadingSave,success:succesSave,error:errorSave}=productSave;
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(listProducts)
        return ()=>{

        };
    },[])
    const openModal=(product)=>{
        setModalVisible(true)
            setId(product._id)
            setName(product.name)
            setPrice(product.price)
            setImage(product.image)
            setBrand(product.brand)
            setCategory(product.category)
            setCountInStock(product.countInStock)
            setRating(product.rating)
            setNumReviews(product.numReviews )
            
    }
const submitHandler=(e)=>{
    e.preventDefault();
    console.log(name,price,image,brand,category,countInStock,description)
    dispatch(saveProduct({name,price,image,brand,category,countInStock,description}))
}
    

    return ( 
        <>
        <div className='content content-margined'>
            <div className='product-header'>
                <h3>Products</h3>
                <button>Create Product</button>
            </div>
            {modalVisible &&
                <div className='form'>
        <form onSubmit={submitHandler}>
            <ul className='form-container'>
            <button onClick={()=>openModal({})}>Create Product</button>
            <li>
                {loadingSave && <div>Loading...</div>}
                {
                    errorSave && <div>{errorSave}</div>
                }
            </li>
            <li>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} ></input>
            </li>
            <li>
                <label htmlFor="price">
                    Price
                </label>
                <input type="number" name="price" id="price" onChange={(e)=>setPrice(e.target.value)} ></input>
            </li>
            <li>
                <label htmlFor="image">
                   Image
                </label>
                <input type="text" name="image" id="image" onChange={(e)=>setImage(e.target.value)} ></input>
            </li>
            <li>
                <label htmlFor="brand">
                    Brand
                </label>
                <input type="text" name="brand" id="brand" onChange={(e)=>setBrand(e.target.value)} ></input>
            </li>
            <li>
                <label htmlFor="category">
                    Category
                </label>
                <input type="text" name="category" id="category" onChange={(e)=>setCategory(e.target.value)} ></input>
            </li>
            <li>
            
                <label htmlFor="countInStock">
                    count-In-Stock
                </label>
                <input type="number" name="countInStock" id="countInStock" onChange={(e)=>setCountInStock(e.target.value)} ></input>
            </li>
                
            <li>
                <label htmlFor="description">
                    Description
                </label>
                <textarea type="text" name="description" id="description" onChange={(e)=>setDescription(e.target.value)} ></textarea>
            </li>
            <li>
            <button type='submit' className='button primary'>Create</button>
            </li>
            <li>
            <button type='button' onClick={()=>setModalVisible(false)} className='button secondary'>Back</button>
            </li>
            </ul>
        </form>
        </div> }
            
            <div className='prodict-list'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>                           
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Action</th>                           
                        </tr>
                    </thead>
                    <tbody>
                    {products.map(product=>(
                        <tr>
                        <td>{product._id}</td>
                            <td>{product._name}</td>
                            <td>{product.price}</td>                           
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>
                                <button onClick={()=>openModal(product)}>Edit</button>
                                <button>Delete</button>
                            </td> 
                        </tr>
                    ))}
                        
                    </tbody>
                </table>
            </div>
            
        </div>
        
        </>
    )  
    

}
export default ProductsScreen;
