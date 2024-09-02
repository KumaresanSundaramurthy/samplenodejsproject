const express = require("express");
const userDetails = require("../controller/authController");

const route = express.Router();

route.get('/get-all-users', userDetails.getUserDetails);
route.get('/verify-user', userDetails.getUserAuth);

module.exports = route;