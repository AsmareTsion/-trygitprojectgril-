const express = require("express");
const app = express();
app.use(express.json());
app.use(express.json({exteneded:false}));
app.use("/product",require("./productRouter"));
app.use("/order",require ("./orderRouter"));
const port = 600;

app.listen(port,()=>{
    console.log("Express server is up")
})