const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/learn-mongodb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connected!"));
  } catch (error) {
    console.log("Connect db failure!")
  }
}

module.exports = { connect };
