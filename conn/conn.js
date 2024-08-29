const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URI || "mongodb://localhost:27017/todo";

const conn = async (req, res) => {
  try {
    const conn = await mongoose
      .connect(
        connectionString
      );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = conn;
