const medicineService = require('../services/medicineServices');

class MedicineController {

    /** Medicine Presentation Details */
    async getAllMedicinePresentationList(request, response) {

        try {

            const RespData = await medicineService.getMedicinePresent();
            response.status(200).json({
                Message: 'Data Retrieved',
                Status: true,
                Data: RespData
            });

        } catch (error) {
            response.status(500).json({
                Message: error,
                Status: false
            })
        }

    }

    /** Create New Medicine Presentation & Validate Unique Data */
    async createMedicinePresentation(request, response) {

        try {

            const creationResp = await medicineService.createMedicinePresent(request.body);
            if(creationResp) {

                response.status(201).json({
                    Message: "Created Successfully",
                    Status: true,
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

    /** Update Medicine Presentation */
    async updateMedicinePresentation(request, response) {

        try {

            const updateResp = await medicineService.updateMedicinePresent(request.body);
            if(updateResp) {
                response.status(200).json({
                    Message: "Updated Successfully",
                    Status: true,
                })
            } else {
                response.status(500).json({
                    Message: 'Error Update',
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

    /** Get Medicine By ID */
    async getMedicinePresentation(request, response) {

        try {

            const getData = await medicineService.getMedicinePresentData(request.body);
            if(getData) {

                response.status(200).json({
                    Message: "Data Retrieved",
                    Status: true,
                    Data: getData
                })

            } else {
                response.status(200).json({
                    Message: "No data found.!",
                    Status: false,
                })
            }

        } catch (error) {
            response.status(500).json({
                Message: error,
                Status: false
            })
        }

    }

    /** Delete Medicine Presentation by ID */
    async deleteMedicinePresentation(request, response) {

        try {

            const deleteResp = await medicineService.deleteMedicinePresent(request.body);
            if(deleteResp) {
                response.status(200).json({
                    Message: 'Successfully Deleted',
                    Status: true,
                })
            } else {
                response.status(500).json({
                    Message: 'Unable to delete',
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