const mongoose = require("mongoose");


const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        process.env.MONGO_URI
      )
      .then(() => {
        console.log("Databse Connected");
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = conn;
