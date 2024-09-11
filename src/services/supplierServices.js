const { createSupplierSchema, updateSupplierSchema, deleteSupplierSchema, updateNewFieldsSupplier } = require('../models/supplierModel');
const inventoryPaymentServices = require('../services/inventoryPaymentServices');
const moment = require('moment');

class SupplierServices {

    async getAllSupplierDetails() {

        try {

            const respData = await createSupplierSchema.find({
                IsActive: true
            });
            return respData;

        } catch (error) {
            throw error;
        }

    }

    async createSupplierData(PostData) {

        try {

            const createData = new createSupplierSchema(PostData);
            if (PostData.PreviousDue > 0) {

                const respData = await createData.save();

                return await inventoryPaymentServices.createInventoryPaymentData({
                    SupplierRefId: respData._id.toString(),
                    Date: moment().format('YYYY-MM-DD'),
                    AmountPaid: 0,
                    AmountDue: PostData.PreviousDue,
                });

            } else {
                return await createData.save();
            }

        } catch (error) {
            throw error;
        }

    }

    async getSupplierData(PostData) {

        try {

            if (PostData.ReferenceId) {

                const respData = await createSupplierSchema.findOne({
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

    async updateSupplierData(PostData) {

        try {

            const RefId = PostData.ReferenceId;
            delete PostData.ReferenceId;

            const updateResp = await updateSupplierSchema.findByIdAndUpdate(
                RefId,
                {
                    $set: PostData,
                },
                {
                    new: true,
                    runValidators: true,
                }
            )
            if (updateResp) {

                const getInvPayment = await inventoryPaymentServices.getInventoryPaymentData({
                    SupplierRefId: RefId,
                })
                if (!getInvPayment) {

                    return await inventoryPaymentServices.createInventoryPaymentData({
                        SupplierRefId: RefId,
                        Date: moment().format('YYYY-MM-DD'),
                        AmountPaid: 0,
                        AmountDue: PostData.PreviousDue,
                    });

                } else {
                    return updateResp;
                }
            }

        } catch (error) {
            throw error
        }

    }

    async deleteSupplierData(PostData) {

        try {

            return await deleteSupplierSchema.findByIdAndUpdate(
                PostData.ReferenceId,
                {
                    $set: {},
                },
                {
                    new: true,
                    runValidators: true,
                }
            );

        } catch (error) {
            throw error
        }

    }

    async updateNewFields(PostData) {

        try {

            const updtResp = await updateNewFieldsSupplier.updateMany(
                {
                    IsActive: true,
                },
                {
                    $set: PostData,
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
            return updtResp;

        } catch (error) {
            throw error
        }

    }

}

module.exports = new SupplierServices;