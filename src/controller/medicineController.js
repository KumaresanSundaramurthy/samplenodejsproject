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

}

module.exports = new MedicineController;