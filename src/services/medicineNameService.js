const { createMedicineName } = require('../models/medicineNameModel');
const { createMedicine } = require('../models/genericNameModel');

class MedicineNameService {

    async getAllMedicineNameDetails() {

        try {

            const getData = await createMedicineName.aggregate([
                {
                    $lookup: {
                        from: 'Generic',
                        localField: 'GenericDetails.GenericUniqId',
                        foreignField: '_id',
                        as: 'GenericTbl'
                    }
                },
                {
                    $unwind: '$GenericTbl'
                },
                // {
                //     $project: {
                //         MedicineName: 1,
                //         'GenericTbl._id': 1
                //     }
                // }
            ]);
            console.log('Aggregated Data:', getData);
            return getData;

        } catch (error) {
            throw error;
        }

    }

    async createMedicineNameDeta(PostData) {

        try {

            if (!PostData.GenericDetails.GenericUniqId) {
                throw new error('Generic Details is required.!');
            }

            const getGenericInfo = await createMedicine.findOne({
                _id: PostData.GenericDetails.GenericUniqId,
                IsActive: true,
            });

            if (getGenericInfo) {

                const createData = new createMedicineName(PostData);
                return await createData.save();

            } else {
                throw new error('Could not get generic name information');
            }

        } catch (error) {
            throw error;
        }

    }

}

module.exports = new MedicineNameService;