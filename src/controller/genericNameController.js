const genericService = require("../services/genericNameService");

class GenericNameController {

    /** Get All Generic Details */
    async getAllGenericDetails(request, response) {
        try {

            const respData = await genericService.getAllGenericData();
            if(respData) {
                response.status(200).json({
                    Message: 'Data Retrieved',
                    Status: true,
                    Data: respData
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
                Status: false
            })
        }
    }

    /** Create Medicine Name */
    async createGenericDetails(request, response) {

        try {

            const respData = await genericService.createGenericData(request.body);
            if(respData) {

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

    /** Get Medicine By ID */
    async getGenericDetails(request, response) {
        try {

            const respData = await genericService.getGenericData(request.body);
            if(respData) {
                response.status(200).json({
                    Message: 'Data Retrieved',
                    Status: true,
                    Data: respData
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
                Status: false
            })
        }
    }

    /** Update Medicine by ID */
    async updateGenericDetails(request, response) {

        try {

            const updateResp = await genericService.updateGenericData(request.body);
            if(updateResp) {
                response.status(200).json({
                    Message: 'Data Updated Successfully',
                    Status: true
                })
            } else {
                response.status(500).json({
                    Message: 'Something went wrong. Please try again.',
                    Status: false,
                })
            }

        } catch(error) {
            response.status(500).json({
                Message: error,
                Status: false
            })
        }

    }

    /** Delete = Status Update Medicine by ID */
    async deleteGenericDetails(request, response) {

        try {

            const updateResp = await genericService.deleteGenericData(request.body);
            if(updateResp) {
                response.status(200).json({
                    Message: 'Data Deleted Successfully',
                    Status: true
                })
            } else {
                response.status(500).json({
                    Message: 'Something went wrong. Please try again.',
                    Status: false,
                })
            }

        } catch(error) {
            response.status(500).json({
                Message: error,
                Status: false
            })
        }

    }

}

module.exports = new GenericNameController;