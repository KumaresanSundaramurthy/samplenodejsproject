const userModule = require("../models/userModel");

const getUserDetails = async (request, response) => {
    try {

        const UserData = await userModule.find({});
        if(UserData.length > 0) {

            response.status(200)
                .json({
                    Message: "Data Retrieved",
                    Success: true,
                    Data: UserData
                })

        } else {
            response.status(200)
                .json({
                    Message: "No Data Found",
                    Success: true,
                    Data: []
                })
        }

    } catch (error) {
        response.status(500)
            .json({
                Message: "Error Occured!",
                Success: false,
                error
            })
    }
}

module.exports = getUserDetails