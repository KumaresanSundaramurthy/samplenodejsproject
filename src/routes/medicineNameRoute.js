const express = require('express');
const route = express.Router();

const MedicineNameController = require('../controller/medicineController');

route.get('/getAllMedicineName', MedicineNameController.getAllMedicineDetails);
route.post('/createMedicineName', MedicineNameController.createMedicineDetails);

module.exports = route;