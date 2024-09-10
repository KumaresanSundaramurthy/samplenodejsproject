const express = require("express");
const medicinePresentationRoute = require('../controller/medicinePresentationController');

const route = express.Router();

route.get('/getAllMedicinePresentation', medicinePresentationRoute.getAllMedicinePresentationList);
route.post('/createMedicinePresentation', medicinePresentationRoute.createMedicinePresentation);
route.post('/updateMedicinePresentation', medicinePresentationRoute.updateMedicinePresentation);
route.post('/getMedicinePresentation', medicinePresentationRoute.getMedicinePresentation);
route.post('/deleteMedicinePresentation', medicinePresentationRoute.deleteMedicinePresentation);

module.exports = route;