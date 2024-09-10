const express = require("express");
const userDetails = require("../controller/authController");

const route = express.Router();

/**
 * @swagger
 * /api/users/get-all-users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get All Users
 *     description: Retrieved all the users
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: Data Retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: object
 *                 UserName:
 *                   type: string
 *                 Password:
 *                   type: string
 *     401:
 *         description: Invalid credentials
 */
route.get('/get-all-users', userDetails.getUserDetails);

/**
 * @swagger
 * /api/users/verify-user:
 *   post:
 *     tags:
 *       - Users
 *     summary: User Login Verify
 *     description: Login Verify for the user
 *     requestBody:
 *       required: false
 *     content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserName:
 *                 type: string
 *               Password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully verified User Authentication
 */
route.post('/verify-user', userDetails.getUserAuth);

module.exports = route;