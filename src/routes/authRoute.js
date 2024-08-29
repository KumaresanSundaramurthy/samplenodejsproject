const express = require("express");
const userDetails = require("../controller/authController");

const route = express.Router();

route.get('/get-user', userDetails);

module.exports = route;