const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "anshumanIsGreat";

router.post("/login", body("email").isEmail(), async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.send({ errors: result.array() });
    } else {
      // res.json(req.body);
      const user = User(req.body);
      const find = await User.findOne({ email: req.body.email });
      console.log(find);
      if (find != null) {
        const payload = {
          user: user._id,
        };
        const token = jwt.sign(payload, JWT_SECRET);
        return res.send({ token });
      }

      const saved = await user.save();
      console.log("Successfully saved the entry...");
      const payload = {
        user: saved._id,
      };
      const token = jwt.sign(payload, JWT_SECRET);
      res.send({ token });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Some error occured");
  }
});

router.get("/getuser", fetchuser, async (req, res) => {
  try {
    console.log("output is"+req.user);
    const user = await User.findById(req.user);
    if (user == null) 
    {
      console.log("not found");
      res.send(false);
      return;
    }
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
