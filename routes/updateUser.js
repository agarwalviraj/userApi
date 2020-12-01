const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const schema = require("../model/userSchema");
const makeUser = require("../model/user");

const geny = schema;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
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

app.post("/", (req, res) => {
  const newUser = new geny(makeUser(req));

  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Successfully added");
    }
  });
});

module.exports = app;
