const medicineNameService = require('../services/medicineNameService');

class MedicineController {

    /** Get All Medicine Details */
    async getAllMedicineDetails(request, response) {

        try {

            const getData = await medicineNameService.getAllMedicineNameDetails();
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

    /** Create a Medicine Details */
    async createMedicineDetails(request, response) {

        try {

            const createResp = await medicineNameService.createMedicineNameDeta(request.body);
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

    /** Get a Medicine Details by Id */
    async getMedicineDetails(request, response) {

        try {

            const getResp = await medicineNameService.getMedicineNameData(request.body);
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

    /** Update a Medicine Details By ID */
    async updateMedicineDetails(request, response) {

        try {

            const getResp = await medicineNameService.updateMedicineData(request.body);
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

    /** Update Medicine Details by ID */
    async deleteMedicineDetails(request, response) {

        try {

            const getResp = await medicineNameService.deleteMedicineData(request.body);
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

}

module.exports = new MedicineController;