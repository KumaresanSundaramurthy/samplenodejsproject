const mongoose = require('mongoose');

const basicGenericSchema = new mongoose.Schema({
    GenericName: {
        type: String,
        required: true,
        unique: true,
    },
    ReferenceID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reference",
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
    }
})

basicGenericSchema.pre('save', function(next) {
    this.set({
        IsActive: true,
        CreatedDate: new Date(),
        CreatedOn: Math.floor(Date.now() / 1000),
        UpdatedDate: new Date(),
        UpdatedOn: Math.floor(Date.now() / 1000),
    })
    next();
})

const updateGenericSchema = new mongoose.Schema({
    GenericName: {
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
    }
})

updateGenericSchema.pre('findOneAndUpdate', function(next) {
    this.set({
        UpdatedDate: new Date(),
        UpdatedOn: Math.floor(Date.now() / 1000),
    })
    next()
})

const deleteGenericSchema = new mongoose.Schema({
    ReferenceID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reference",
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

deleteGenericSchema.pre('findOneAndUpdate', function(next) {
    this.set({
        IsActive: false,
        UpdatedDate: new Date(),
        UpdatedOn: Math.floor(Date.now() / 1000),
    })
    next()
})

const db = mongoose.connection.useDb('practise');
const createMedicine = db.model('Generic', basicGenericSchema, 'Generic');
const updateMedicine = db.model('Generic', updateGenericSchema, 'Generic');
const deleteMedicine = db.model('Generic', deleteGenericSchema, 'Generic');

module.exports = {
    createMedicine,
    updateMedicine,
    deleteMedicine,
}