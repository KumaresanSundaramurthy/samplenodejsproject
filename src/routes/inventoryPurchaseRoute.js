const express = require('express');
const route = express.Router();

const InventoryPurchaseController = require('../controller/inventoryPurchaseController');

route.post('/createPurchaseInventory', InventoryPurchaseController.createInventoryPurDetails);

module.exports = route;