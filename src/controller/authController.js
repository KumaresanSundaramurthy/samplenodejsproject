const userService = require("../services/authServices");
const redisClient = require("../libraries/redisCache");
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

class UserController {

    /** get User Authentication */
    async getUserAuth(request, response) {

        try {

            const { UserName, Password } = request.body;

            if (!UserName || !Password) {
                return response.status(400).json({
                    Message: 'Username and Password are required',
                    Success: true
                });
            }

            const UserVerify = await userService.checkUserAuthentication(UserName, Password);
            if (UserVerify.Success) {

                // const RedisKey = uuidv4() + '-' + UserVerify.Data._id.toString();
                const RedisKey = Buffer.from(UserVerify.Data._id.toString(), 'utf-8').toString('base64');

                /** Generate JwtToken */
                const JwtPayload = {
                    data: RedisKey,
                    iat: Math.floor(Date.now() / 1000),
                    nbf: Math.floor(Date.now() / 1000),
                    exp: Math.floor(Date.now() / 1000) + 43200,
                }
                const jwtEncoded = jwt.sign(JwtPayload, process.env.JWT_SECRET, {
                    algorithm: 'HS256',
                    issuer: process.env.HTTP_HOST || 'http://localhost:3000',
                });

                const UserInfo = {
                    User: {
                        UniqueID: UserVerify.Data._id.toString(),
                        UserName: UserVerify.Data.UserName,
                    },
                    JwtToken: jwtEncoded,
                    RedisKey: RedisKey,
                }

                await redisClient.set(RedisKey, JSON.stringify(UserInfo), 43200);

                // response.cookie(process.env.JWT_COOKIE_NAME, jwtEncoded, {
                //     httpOnly: true,
                //     maxAge: 3600000,
                //     secure: process.env.NODE_ENV === 'production',
                //     sameSite: 'None'
                // });

                response.status(200).json({
                    Message: "Successfully verified User Authentication",
                    Success: true,
                    Data: {
                        UserID: UserVerify.Data._id.toString()
                    }
                });

            } else {
                response.status(200).json({
                    Message: "Could not find the User information",
                    Success: true
                })
            }

        } catch (error) {
            if (error.message == "User Not Found!" || error.message == "User Password is Incorrect. Please enter correct Password!") {
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