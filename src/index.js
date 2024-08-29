const express = require("express");
const dbConn = require("./config/db");
const authRoute = require("./routes/authRoute");

dbConn();
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/users', authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is listening to the port: ${PORT}`);
})