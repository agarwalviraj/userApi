const mongoose = require("mongoose");
const schemau = {
  name: "string",
  groupName: "string",
  role: "string",
  joined: "string",
  city: "string",
  about: "string",
  level: "Number",
  points: "Number",
  awards: "Number",
  matches: "Number",
  pals: "Number",
};

module.exports = mongoose.model("Users", schemau);
