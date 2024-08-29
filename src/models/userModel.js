const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    UserName: String,
    Password: String,
});

const db = mongoose.connection.useDb('practise');
const userData = db.model('users', userSchema);

module.exports = userData;