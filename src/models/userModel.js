const mongoose = require("mongoose");
const md5 = require("md5");

const userSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
    ReferenceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reference",
    }
});

// userSchema.pre('save', function (next) {
//     if (this.isModified('Password') || this.isNew) {
//         this.Password = md5(this.Password).toUpperCase();  // Hashing the password with MD5
//     }
//     next();
// });

userSchema.methods.comparePassword = function (userPassword) {
    const hashedPassword = md5(userPassword).toUpperCase();
    return this.Password === hashedPassword;
}

const db = mongoose.connection.useDb('practise');
const userData = db.model('Users', userSchema, 'Users');

module.exports = userData;