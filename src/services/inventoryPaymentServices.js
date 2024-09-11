const { newInvtPayment } = require('../models/inventoryPaymentModel');

class InventoryPaymentServices {

    async createInventoryPaymentData(PostData) {

        try {
            const createInvtPayment = new newInvtPayment(PostData);
            return await createInvtPayment.save();

        } catch (error) {
            throw error;
        }

    }

    async getInventoryPaymentData(PostData) {

        try {

            if (PostData.ReferenceId || PostData.SupplierRefId) {

                const searchData = { ...PostData, ...{ IsActive: true } }

                return await newInvtPayment.findOne(searchData);

            } else {
                throw new Error("Reference ID is missing.");
            }

        } catch (error) {
            throw error;
        }

    }

}

module.exports = new InventoryPaymentServices;