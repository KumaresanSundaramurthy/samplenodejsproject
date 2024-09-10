const mongoose = require('mongoose');

const createMedicineNameSchema = new mongoose.Schema({
    MedicineName: {
        type: String,
        required: true,
        unique: true,
    },
    GenericDetails: {
        GenericUniqId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        GenericName: {
            type: String,
            required: true,
        }
    },
    ReferenceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reference',
    },
    IsActive: {
        type: Boolean,
        default: true,
        required: true,
    },
    CreatedDate: {
        type: Date,
        default: new Date(),
        required: true,
    },
    CreatedOn: {
        type: Number,
        default: Math.floor(Date.now() / 1000),
        required: true,
    },
    UpdatedDate: {
        type: Date,
        default: new Date(),
        required: true,
    },
    UpdatedOn: {
        type: Number,
        default: Math.floor(Date.now() / 1000),
        required: true,
    },
})

const db = mongoose.connection.useDb('practise');

const createMedicineName = db.model('Medicine', createMedicineNameSchema, 'Medicine')

module.exports = {
    createMedicineName,
}