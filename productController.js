const express = require("express");
const product = require("./productController.js");
exports.GetAllproduct=async(req,res)=>{
    try{
    const productList = await product.find();
    res.send(productList);
} catch(error){
  res.send(err)  
}
}
exports.Addproduct = async (req,res)=>{
    //const data = req.body
    try{
        const {name, price} = req.body;
        const product = await product.create ({name,price});
        res.send(product);
    }catch (error){
        res.json({msg:"error"});
    }
    console.log(data.product[1]);
   // res.send(data);
    //data send by user

}
