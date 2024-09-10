const { createMedicine, updateMedicine, deleteMedicine } = require('../models/genericNameModel');

class GenericNameService {

    async getAllGenericData() {

        try {

            const respData = await createMedicine.find({
                IsActive: true
            }).sort({ CreatedDate: -1 })
            return respData;

        } catch (error) {
            throw error;
        }

    }

    async createGenericData(PostData) {

        try {

            const createData = new createMedicine(PostData);
            return await createData.save();

        } catch (error) {
            throw error
        }

    }

    async getGenericData(PostData) {

        try {

            if (PostData.ReferenceId) {
                
                const respData = await createMedicine.find({
                    _id: PostData.ReferenceId,
                    IsActive: true,
                })
                return respData;

            } else {
                throw new Error("Reference ID is missing.");
            }

        } catch (error) {
            throw error;
        }

    }

    async updateGenericData(PostData) {

        try {

            const RefId = PostData.ReferenceId;
            delete PostData.ReferenceId;

            return await updateMedicine.findByIdAndUpdate(
                RefId,
                {
                    $set: PostData,
                },
                {
                    new: true,
                    runValidators: true,
                }
            );

        } catch(error) {
            throw error
        }

    }

    async deleteGenericData(PostData) {

        try {

            return await deleteMedicine.findByIdAndUpdate(
                PostData.ReferenceId,
                {
                    $set: {},
                },
                {
                    new: true,
                    runValidators: true,
                }
            );

        } catch(error) {
            throw error
        }

    }

}

module.exports = new GenericNameService;