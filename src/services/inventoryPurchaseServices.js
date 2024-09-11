const { createInventoryPurchase } = require('../models/inventoryPurchaseModel');
const inventoryPaymentServices = require('./inventoryPaymentServices');
const moment = require('moment');

class InventoryPurchaseServices {

    async createInventoryPurchaseData(PostData) {

        try {

            const createData = new createInventoryPurchase(PostData);
            const getResp = await createData.save();
            if (getResp) {

                return await inventoryPaymentServices.createInventoryPaymentData({
                    SupplierRefId: PostData.SupplierRefId,
                    Date: moment().format('YYYY-MM-DD'),
                    AmountPaid: PostData.PurchasePaid,
                    AmountDue: PostData.PurchaseDue,
                    InventoryRefId: getResp._id.toString(),
                    InventoryType: 'Purchase',
                });

            }

        } catch (error) {
            console.log(error)
            throw error;
        }

    }

}

module.exports = new InventoryPurchaseServices;