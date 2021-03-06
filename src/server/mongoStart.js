const config = require("./config.js");
const mongoose = require("mongoose");


module.exports = function () {
  mongoose
    .connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    .then(() => console.log("connected to Mongodb..."))
    .catch(err => console.log("couldn't connect to MongoDB", err));


};