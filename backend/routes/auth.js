const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const JWT_SEECRET = "anshumanIsGreat";

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
      if (find != null) return res.send("user already exists!!!!!!!!!!");

      const saved = await user.save();
      console.log("Successfully saved the entry...");
      const payload = {
        user: {
          _id: saved._id,
        },
      };
      const token = jwt.sign(payload, JWT_SEECRET);
      res.send({ token });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
