const express = require('express');
const route = express.Router();

const SupplierController = require('../controller/supplierController');

route.get('/getAllSuppliers', SupplierController.getAllSuppliers);
route.post('/createSupplier', SupplierController.createSupplierDetails);
route.post('/getSupplier', SupplierController.getSupplierDetails);
route.put('/updateSupplierInfo', SupplierController.updateSupplierDetails);
route.post('/deleteSupplier', SupplierController.deleteSupplierDetails);
route.put('/updateNewFieldsSupplier', SupplierController.updateNewFields);

module.exports = route;