const express = require("express");
const router = express.Router();



const {
  Law,
} = require("../models/law");



//--------routes

router.get("/", async (req, res) => {
  const laws = await Law.find();
  res.send(laws);

});

router.get("/:id", async (req, res) => {
  const laws = await Law.find({
    _id: {
      $gt: req.params.id
    }
  }).sort({
    _id: 1
  }).limit(5);
  res.send(laws);

});


module.exports = router;