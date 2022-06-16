const express = require("express");
const bodyParser = require("body-parser");
const { convert } = require("./converter");
var app = express();
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    const ans = convert(req.body);
    res.send(ans);
})


app.listen(3000,()=>{
    console.log("app started");
})