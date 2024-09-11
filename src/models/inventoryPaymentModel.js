const mongoose = require('mongoose');
const moment = require('moment');

const createInventPayment = new mongoose.Schema({
    SupplierRefId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
        default: moment().format('YYYY-MM-DD'),
    },
    AmountPaid: {
        type: Number,
        required: true,
    },
    AmountDue: {
        type: Number,
        required: true,
    },
    InventoryRefId: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
    },
    InventoryType: {
        type: String,
        required: true,
        default: 'Default', // Default (or) Purchase
        maxlength: 15,
    },
    IsActive: {
        type: Boolean,
        default: true,
    },
    CreatedDate: {
        type: Date,
        default: new Date(),
    },
    CreatedOn: {
        type: Number,
        default: Math.floor(Date.now() / 1000),
    },
    UpdatedDate: {
        type: Date,
        default: new Date(),
    },
    UpdatedOn: {
        type: Number,
        default: Math.floor(Date.now() / 1000),
    },
})

const db = mongoose.connection.useDb('practise');

const newInvtPayment = db.model('InventoryPayment', createInventPayment, 'InventoryPayment');

module.exports = {
    newInvtPayment,
}