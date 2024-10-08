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
});

const updateMedicineNameSchema = new mongoose.Schema({
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
    },
    UpdatedDate: {
        type: Date,
        default: new Date(),
    },
    UpdatedOn: {
        type: Number,
        default: Math.floor(Date.now() / 1000),
    },
}, { strict: false });

updateMedicineNameSchema.pre('findOneAndUpdate', function (next) {
    this.set({
        IsActive: true,
        UpdatedDate: new Date(),
        UpdatedOn: Math.floor(Date.now() / 1000),
    })
    next();
})

const deleteMedicineNameSchema = new mongoose.Schema({
    ReferenceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reference',
    },
    IsActive: {
        type: Boolean,
        default: true,
    },
    UpdatedDate: {
        type: Date,
        default: new Date(),
    },
    UpdatedOn: {
        type: Number,
        default: Math.floor(Date.now() / 1000),
    },
}).pre('findOneAndUpdate', function (next) {
    this.set({
        IsActive: false,
        UpdatedDate: new Date(),
        UpdatedOn: Math.floor(Date.now() / 1000),
    })
    next();
})

const db = mongoose.connection.useDb('practise');

const createMedicineName = db.model('Medicine', createMedicineNameSchema, 'Medicine')
const updateMedicineName = db.model('Medicine', updateMedicineNameSchema, 'Medicine')
const deleteMedicineName = db.model('Medicine', deleteMedicineNameSchema, 'Medicine')

module.exports = {
    createMedicineName,
    updateMedicineName,
    deleteMedicineName,
}