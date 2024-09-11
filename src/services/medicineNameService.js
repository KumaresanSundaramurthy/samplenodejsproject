const { createMedicineName, updateMedicineName, deleteMedicineName } = require('../models/medicineNameModel');
const { createMedicine } = require('../models/genericNameModel');
const mongoose = require('mongoose');

class MedicineNameService {

    async getAllMedicineNameDetails() {

        try {

            const getData = await createMedicineName.aggregate([
                {
                    $lookup: {
                        from: 'Generic',
                        let: {
                            genericId: '$GenericDetails.GenericUniqId',
                        },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $and: [
                                            {
                                                $eq: ['$_id', '$$genericId']
                                            },
                                            {
                                                $eq: ['$IsActive', true]
                                            },
                                        ]
                                    }
                                },
                            },
                            {
                                $project: {
                                    _id: 1,
                                    GenericName: 1
                                }
                            }
                        ],
                        as: 'GenericTbl'
                    }
                },
                {
                    $unwind: {
                        path: '$GenericTbl',
                        preserveNullAndEmptyArrays: false,
                    }
                }
            ]);
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

    async getMedicineNameData(PostData) {

        try {

            const respData = await createMedicineName.aggregate([
                {
                    $match: {
                        _id: new mongoose.Types.ObjectId(PostData.ReferenceId)
                    }
                },
                {
                    $lookup: {
                        from: 'Generic',
                        let: {
                            genericId: '$GenericDetails.GenericUniqId',
                        },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $and: [
                                            {
                                                $eq: ['$_id', '$$genericId'],
                                            },
                                            {
                                                $eq: ['$IsActive', true],
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                $project: {
                                    _id: 1,
                                    GenericName: 1
                                }
                            }
                        ],
                        as: 'GenericTbl',
                    }
                },
                {
                    $unwind: {
                        path: '$GenericTbl',
                        preserveNullAndEmptyArrays: true,
                    }
                }
            ]);
            return respData;

        } catch (error) {
            throw error;
        }

    }

    async updateMedicineData(PostData) {

        try {

            if (!PostData.GenericDetails.GenericUniqId) {
                throw new Error('Generic Details is required.!');
            }

            const genrResp = await createMedicine.findOne({
                _id: PostData.GenericDetails.GenericUniqId,
                IsActive: true,
            })

            if (!genrResp) {
                throw new error('Could not get generic name information');
            } else {

                let RefId = PostData.ReferenceId;
                delete PostData.ReferenceId;

                const updateResp = await updateMedicineName.findOneAndUpdate(
                    {
                        _id: RefId
                    },
                    {
                        $set: PostData
                    },
                    {
                        new: true,
                        runValidators: false,
                    }
                );
                return updateResp;

            }

        } catch (error) {
            throw error;
        }

    }

    async deleteMedicineData(PostData) {

        try {
        
            const deleteResp = await deleteMedicineName.findOneAndUpdate(
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

module.exports = new MedicineNameService;