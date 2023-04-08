const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRoutes = require("./routes/usersRoutes");

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening");
});

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://rofaalfons7:test12345@phonesearch.b7uffby.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("Db connected");
  }
);

app.use(cors());

// users routes
app.use("/users", usersRoutes);

//404 Page
app.use("*", (req, res) => {
  res.json({ message: "Page not Found" });
});

//Unhandeled Error
app.use((err, req, res, next) => {
  res.json({ message: "Error" });
});

module.exports = app;
