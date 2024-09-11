const express = require('express');
const route = express.Router();

const MedicineNameController = require('../controller/medicineController');

route.get('/getAllMedicineName', MedicineNameController.getAllMedicineDetails);
route.post('/createMedicineName', MedicineNameController.createMedicineDetails);
route.post('/getMedicineDetails', MedicineNameController.getMedicineDetails);
route.put('/updateMedicineDetails', MedicineNameController.updateMedicineDetails);
route.post('/deleteMedicineDetails', MedicineNameController.deleteMedicineDetails);

module.exports = route;