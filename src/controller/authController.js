const userModule = require("../models/userModel");
const userService = require("../services/authServices");

class UserController {

    /** get User Authentication */
    async getUserAuth(request, response) {

        try {

            const { UserName, Password } = request.query;

            if (!UserName || !Password) {
                return response.status(400).json({
                    Message: 'Username and Password are required',
                    Success: true
                });
            }

            const UserVerify = await userService.checkUserAuthentication(UserName, Password);
            if (UserVerify) {
                response.status(200).json({
                    Message: "Successfully verified User Authentication",
                    Success: true
                })
            } else {
                response.status(200).json({
                    Message: "Could not find the User information",
                    Success: true
                })
            }

        } catch (error) {
            if(error.message == "User Not Found!" || error.message == "User Password is Incorrect. Please enter correct Password!") {
                response.status(401);
            } else {
                response.status(500);
            }            
            response.json({
                Message: error.message,
                Success: false,
                error
            })
        }

    }

    /** Show All Users in the table */
    async getUserDetails(request, response) {
        try {

            const UserData = await userService.getAllUserDetails();
            if (UserData.length > 0) {

                response.status(200).json({
                    Message: "Data Retrieved",
                    Success: true,
                    Data: UserData
                })

            } else {
                response.status(200).json({
                    Message: "No Data Found",
                    Success: true,
                    Data: []
                })
            }

        } catch (error) {
            response.status(500).json({
                Message: "Error Occured!",
                Success: false,
                error
            })
        }
    }

}

module.exports = new UserController;