const mongoose = require("mongoose");
const userModule = require("../models/userModel");

class UserService {

    /** Get All User Details */
    async getAllUserDetails() {
        try {
            const users = await userModule.find({});
            return users;
        } catch (error) {
            throw new Error("Failed to retrieve user details.", error);
        }
    }

    /** User Authentication */
    async checkUserAuthentication(UserName, Password) {
        try {

            const findUser = await userModule.findOne({ UserName });            
            if (!findUser) {
                throw new Error("User Not Found!");
            }
            
            const verifyUserPassword = findUser.comparePassword(Password);
            if(!verifyUserPassword) {
                throw new Error("User Password is Incorrect. Please enter correct Password!");
            }

            return true;

        } catch (error) {
            throw error;
        }
    }

}

module.exports = new UserService;