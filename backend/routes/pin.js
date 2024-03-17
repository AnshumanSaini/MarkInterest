const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Pin = require("../models/pin");

router.get("/getallpin", fetchuser, async (req, res) => {
  try {
    const pinData = await Pin.find();
    res.json(pinData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Some error occured");
  }
});

router.post("/savepin", fetchuser, async (req, res) => {
  try {
    req.body["user_id"] = req.user;
    console.log(req.body);

    let data = await Pin.insertMany(req.body);
    console.log(data);
    res.status(200).send("Pin saved successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Some error occured");
  }
});

router.get("/getpin/:category", fetchuser, async (req, res) => {
  try {
    const pinData = await Pin.find({ category: req.params.category });
    if (!pinData) {
      res.status(400).send("Not Found");
    } else res.status(200).json(pinData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Some error occured");
  }
});

router.post("/markpin", fetchuser, async (req, res) => {
  const newValue = req.body.value;
  console.log(newValue);

  try {
    // Find the document where you want to add the value
    const doc = await Pin.findOneAndUpdate(
      { _id: req.body.id },
      { $push: { save: newValue } },
      { new: true }
    );
    res.json({ message: "Value added successfully", updatedDocument: doc });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error adding value to array" });
  }
});

router.delete("/deletepin", fetchuser, async (req, res)=>{
    try
    {
        const doc = await Pin.deleteOne({_id : req.body.id})

        res.json({message: "Value deleted successfully"});
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error adding value to array" });
      }
})

module.exports = router;
