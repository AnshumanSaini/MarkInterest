const jwt = require("jsonwebtoken");
const JWT_SECRET = "anshumanIsGreat";

const fetchuser = (req, res, next)=>{
    
    let token =req.header("auth-token");
    
    if(token==null){
        res.send("Enter Correct Credentials!!!!");
    }
    else
    {
        try{
        const data = jwt.verify(token, JWT_SECRET);
        req.user=data.user;
        next();
        }
        catch(err) {
            res.send(err);
        }
    }
}

module.exports = fetchuser;