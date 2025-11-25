const express = require("express");
const { createUser } = require("../controllers/usercontrolles");

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
  return res.status(200).json("hello world API");
});
routerAPI.post("/register", createUser);

module.exports = routerAPI; //export default
