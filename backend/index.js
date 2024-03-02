const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
const { connect } = require("mongoose");

const app = express();

app.use(cors());
connectToMongo();
const port=5000;

app.get('/',(req,res)=>{
    res.send("hey");
})

app.listen(port,()=>{console.log(`Connected at port: ${port}`)});