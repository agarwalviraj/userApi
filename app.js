const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const users = require("./routes/updateUser");
app.use(cors());
app.use("*", cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  `mongodb+srv://admin:${process.env.DB_PWD}@geny.mbixr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority/`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/users", users);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started sucessfully");
});
