const mongoose = require('mongoose');

const medicinePresentationSchema = new mongoose.Schema({
    MedicinePresentationName: {
        type: String,
        required: true,
        unique: true,
    },
    ReferenceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reference",
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

const updateMissedFieldsMedicinePresentationSchema = new mongoose.Schema({
    MedicinePresentationName: {
        type: String,
        required: true,
        unique: true,
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
});

const updateMedicinePresentationSchema = new mongoose.Schema({
    MedicinePresentationName: {
        type: String,
        required: true,
        unique: true,
    },
    IsActive: {
        type: Boolean,
        default: true,
    },
    UpdatedDate: {
        type: Date,
    },
    UpdatedOn: {
        type: Number,
    },
}, { strict: false });

updateMedicinePresentationSchema.pre('findOneAndUpdate', function (next) {
    this.set({
        UpdatedDate: new Date(),
        UpdatedOn: Math.floor(Date.now() / 1000),
    })
    next();
})

const deleteMedicinePresentationSchema = new mongoose.Schema({
    ReferenceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReferenceID",
    },
    IsActive: {
        type: Boolean,
    },
    UpdatedDate: {
        type: Date,
    },
    UpdatedOn: {
        type: Number,
    }
})
deleteMedicinePresentationSchema.pre('findOneAndUpdate', function (next) {
    this.set({
        IsActive: false,
        UpdatedDate: new Date(),
        UpdatedOn: Math.floor(Date.now() / 1000),
    })
    next();
})

const db = mongoose.connection.useDb('practise');

const medicineData = db.model('MPresentation', medicinePresentationSchema, 'MPresentation');
const updateMissedFieldsMedicineData = db.model('MPresentation', updateMedicinePresentationSchema, 'MPresentation');
const updateMedicineData = db.model('MPresentation', updateMedicinePresentationSchema, 'MPresentation');
const deleteMedicineData = db.model('MPresentation', deleteMedicinePresentationSchema, 'MPresentation');

module.exports = { medicineData, updateMissedFieldsMedicineData, updateMedicineData, deleteMedicineData };