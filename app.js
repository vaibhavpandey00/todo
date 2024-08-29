require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");
const conn = require("./conn/conn");
app.use(express.json());
app.use(cors());
conn();

const Port = process.env.PORT || 8080;

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
