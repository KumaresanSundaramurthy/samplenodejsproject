const supplierServices = require('../services/supplierServices');

class SupplierController {

    /** Get All Supplier Details */
    async getAllSuppliers(request, response) {

        try {

            const getData = await supplierServices.getAllSupplierDetails();
            if(getData) {
                response.status(200).json({
                    Message: 'Data Retrieved',
                    Status: true,
                    Data: getData
                })
            } else {
                response.status(200).json({
                    Message: 'Data is Empty',
                    Status: true,
                    Data: []
                })
            }

        } catch(error) {
            response.status(500).json({
                Message: error,
                Status: false,
            })
        }

    }

    /** Create a Supplier Data */
    async createSupplierDetails(request, response) {

        try {

            const createResp = await supplierServices.createSupplierData(request.body);
            if(createResp) {
                response.status(200).json({
                    Message: 'Created Successfully',
                    Status: true,
                })
            } else {
                response.status(500).json({
                    Message: 'Error while creating a data',
                    Status: false,
                })
            }

        } catch(error) {
            response.status(500).json({
                Message: error,
                Status: false,
            })
        }

    }

    /** Supplier Details by ID */
    async getSupplierDetails(request, response) {

        try {

            const getResp = await supplierServices.getSupplierData(request.body);
            if(getResp) {
                response.status(200).json({
                    Message: 'Data Retrieved Successfully',
                    Status: true,
                    Data: getResp
                })
            } else {
                response.status(200).json({
                    Message: 'Error while retrieving a data',
                    Status: true,
                    Data: []
                })
            }

        } catch(error) {
            response.status(500).json({
                Message: error,
                Status: false,
            })
        }

    }

    /** Update Supplier By ID */
    async updateSupplierDetails(request, response) {

        try {

            const getResp = await supplierServices.updateSupplierData(request.body);
            if(getResp) {
                response.status(200).json({
                    Message: 'Data Updated Successfully',
                    Status: true,
                })
            } else {
                response.status(500).json({
                    Message: 'Error updating',
                    Status: false,
                })
            }

        } catch(error) {
            response.status(500).json({
                Message: error,
                Status: false,
            })
        }

    }

    /** Delete Supplier by ID */
    async deleteSupplierDetails(request, response) {

        try {

            const getResp = await supplierServices.deleteSupplierData(request.body);
            if(getResp) {
                response.status(200).json({
                    Message: 'Data Deleted Successfully',
                    Status: true,
                })
            } else {
                response.status(500).json({
                    Message: 'Error deleting',
                    Status: false,
                })
            }

        } catch(error) {
            response.status(500).json({
                Message: error,
                Status: false,
            })
        }

    }

    /** Update New Fields for all documents */
    async updateNewFields(request, response) {

        try {

            const getResp = await supplierServices.updateNewFields(request.body);
            if(getResp) {
                response.status(200).json({
                    Message: 'Data Updated Successfully',
                    Status: true,
                })
            } else {
                response.status(500).json({
                    Message: 'Error updating',
                    Status: false,
                })
            }

        } catch(error) {
            response.status(500).json({
                Message: error,
                Status: false,
            })
        }

    }

}

module.exports = new SupplierController;