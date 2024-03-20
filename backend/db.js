const mongoose = require('mongoose');

const connectToMongo = ()=>{
    mongoose.connect("mongodb+srv://rockasd25:W8ZPVfC2vF6B7mZg@cluster0.879lt6g.mongodb.net/MarkInterest", {useNewUrlParser: true}).then(()=> console.log("Connection is Successfull...")).catch((err)=> console.log(err));
    }

module.exports = connectToMongo;