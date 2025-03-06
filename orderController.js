const express = require("express");

exports.getallorder = async (req,res) =>{
    const orderlist = ["order A","order b","order c"]
    res.send(orderlist)
};

exports.addorder = async (req,res) =>{
    const reqorder = req.body;
    const totalprice = reqorder.totalprice;
    //order will be added to the DB
    console.log(reqorder);
    res.send(totalprice);
}