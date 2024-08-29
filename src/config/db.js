const mongoose = require('mongoose');
require('dotenv').config();

const dbConn = async () => {
    try {
        const mongoDbUrl = process.env.MONGODB_URI;
        const connEst = await mongoose.connect(mongoDbUrl);
        // console.log("Connected to the MongoDb: ", connEst.connection.host);
        return connEst.connection;

    } catch (error) {
        console.log("Connection failed!");
        process.exit(1);
    }
};

// dbConn();

module.exports = dbConn;