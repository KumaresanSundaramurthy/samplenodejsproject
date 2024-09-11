const InventoryPurchaseService = require('../services/inventoryPurchaseServices');

class InventoryPurchase {

    /** Create Inventory Purchase */
    async createInventoryPurDetails(request, response) {

        try {

            const respData = await InventoryPurchaseService.createInventoryPurchaseData(request.body);
            if (respData) {
                response.status(200).json({
                    Message: 'Created Successfully',
                    Status: true
                })
            } else {
                response.status(500).json({
                    Message: 'Error creation',
                    Status: false,
                })
            }

        } catch (error) {
            response.status(500).json({
                Message: error,
                Status: false,
            })
        }

    }

}

module.exports = new InventoryPurchase;