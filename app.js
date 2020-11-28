const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./model/userSchema");
const makeUser = require("./model/addUser");
require("dotenv").config();
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  `mongodb+srv://admin:${process.env.DB_PWD}@geny.mbixr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority/`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const geny = mongoose.model("Users", schema);

app.get("/users", (req, res) => {
  console.log(req.query.amt);
  geny
    .find((err, foundUsers) => {
      if (err) {
        console.log(err);
      } else {
        res.send(foundUsers);
      }
    })
    .limit(parseInt(req.query.amt));
});

app.post("/users", (req, res) => {
  const newUser = new geny(makeUser(req));

  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Successfully added");
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on sucessfully");
});
