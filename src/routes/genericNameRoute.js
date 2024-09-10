const express = require('express');
const route = express.Router();

const genericController = require('../controller/genericNameController');

route.get('/getAllGenericDetails', genericController.getAllGenericDetails);
route.post('/getGenericDetails', genericController.getGenericDetails);
route.post('/createGenericDetails', genericController.createGenericDetails);
route.post('/updateGenericDetails', genericController.updateGenericDetails);
route.post('/deleteGenericDetails', genericController.deleteGenericDetails);

module.exports = route;