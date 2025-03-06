const express = require("express");
const {GetAllproduct, Addproduct} = require("./productController")
const  Router = express.Router();


Router.get("/getallproduct",GetAllproduct);
Router.post("/Addproduct",Addproduct);
module.exports = Router;