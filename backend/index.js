const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
const dotenv = require("dotenv")
const bodyParser = require('body-parser');
dotenv.config()

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
connectToMongo();
const port=5000;

//Routes...
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/pin', require('./routes/pin.js'));

app.get('/',(req,res)=>{
    res.send("hey");
})

app.listen(port,()=>{console.log(`Connected at port: ${port}`)});