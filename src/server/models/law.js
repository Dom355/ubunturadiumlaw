const mongoose = require("mongoose");
const mongo = require("mongodb");

const insertedLaw = require("./AllCodes_CA.json");

const Law = mongoose.model(
  "Laws",
  new mongoose.Schema({

    id: String,
    law_code: String,
    section_num: String,
    code_title: String,
    heading: String,
    content_xml: String,
    division: String,
    title: String,
    part: String,
    chapter: String,
    article: String,
    node_treepath: String,
    seq_num: Number



  }),
);
// uncomment to uplaod data-->
// Law.create(insertedLaw);
// console.log("done dude")

exports.Law = Law;

// const law = new Law({
//   name: "Civil Code",
//   tags: ["California", "Civil Code"]
// });

// const result = law.save();
// console.log(result);