const mongoose = require('mongoose');
const { medicineData, updateMissedFieldsMedicineData, updateMedicineData, deleteMedicineData } = require('../models/medicineModel');

class medicineService {

    async getMedicinePresent() {

        try {

            const respData = await medicineData.find({
                IsActive: true
            });
            return respData;

        } catch (error) {
            throw error;
        }

    }

    async createMedicinePresent(PostData) {

        try {

            const createMed = new medicineData(PostData);
            return await createMed.save();

        } catch (error) {
            throw error;
        }

    }

    async updateMedicinePresent(PostData) {
        try {

            const RefId = PostData.ReferenceId;
            delete PostData.ReferenceId;

            const ExistingDoc = await updateMedicineData.findById(RefId);
            if (!ExistingDoc) {
                throw new Error('Document not Exists!');
            }

            const UpdateData = { ...ExistingDoc.toObject(), ...PostData };

            return await updateMedicineData.findByIdAndUpdate(
                RefId,
                {
                    $set: UpdateData
                },
                {
                    new: true,
                    runValidators: false,
                }
            );

        } catch (error) {
            throw error;
        }
    }

    async getMedicinePresentData(PostData) {

        try {

            if (PostData.ReferenceId) {

                const respData = await medicineData.findOne({
                    _id: PostData.ReferenceId
                })
                return respData;

            } else {
                throw new Error("Reference ID is missing.");
            }

        } catch (error) {
            throw error;
        }

    }

    async deleteMedicinePresent(PostData) {
        try {

            const deleteResp = await deleteMedicineData.findOneAndUpdate(
                {
                    _id: PostData.ReferenceId,
                },
                {
                    $set: {},
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
            return deleteResp;

        } catch (error) {
            throw error;
        }

    }

}

module.exports = new medicineService;