import express from 'express'
import Product from '../models/productModel'
import getToken from '../util';
const router=express.Router();

router.get("/",async(req,res)=>{
    const products=await Product.find({});
    res.send(products)
});

router.post("/",async(req,res)=>{
    console.log(req.body)
    const product=new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.body.image,
        brand:req.body.name,
        category:req.body.category,
        countInStock:req.body.countInStock,
        description:req.body.description,
        Rating:req.body.Rating,
        numReviews:req.body.numReviews,
    });
    const newProduct=await product.save();
    console.log(newProduct)
    if(newProduct){
       return res.status(201).send({message:'New Product created',data:newProduct})
    }
    else{
        return res.status(500).send({message:'Error in Creating Product'})
    }
})
export default router;
