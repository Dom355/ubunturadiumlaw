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

  const Cat = mongoose.model('Cat', {
    name: String
  });

  const kitty = new Cat({
    name: 'Zildjian'
  });
  kitty.save().then(() => console.log('meow'));
};