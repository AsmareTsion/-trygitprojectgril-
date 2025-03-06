const express = require("express");

exports.GetAllproduct=async(req,res)=>{
    const productList = ["chair","table","shoes","green","black"];
    res.send(productList);
}
exports.Addproduct = async (req,res)=>{
    const data = req.body
    console.log(data.product[1]);
    res.send(data);
    //data send by user

}
