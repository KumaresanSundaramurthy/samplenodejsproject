const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    SupplierName: {
        type: String,
        required: true,
        unique: true,
    },
    Mobile: {
        type: String,
        required: true,
        unique: true,
    },
    AddressInfo: {
        type: String,
        required: true,
    },
    PreviousDue: {
        type: Number
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

const updateSchema = new mongoose.Schema({
    SupplierName: {
        type: String,
        required: true,
        unique: true,
    },
    Mobile: {
        type: String,
        required: true,
        unique: true,
    },
    AddressInfo: {
        type: String,
        required: true,
    },
    PreviousDue: {
        type: Number
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
}).pre('findOneAndUpdate', function(next) {
    this.set({
        IsActive: true,
        UpdatedDate: new Date(),
        UpdatedOn: Math.floor(Date.now() / 1000)
    })
    next();
});

const deleteSchema = new mongoose.Schema({
    ReferenceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reference',
    },
    IsActive: {
        type: Boolean,
        default: false,
    },
    UpdatedDate: {
        type: Date,
        default: new Date(),
    },
    UpdatedOn: {
        type: Number,
        default: Math.floor(Date.now() / 1000),
    },
}).pre('findOneAndUpdate', function(next) {
    this.set({
        IsActive: false,
        UpdatedDate: new Date(),
        UpdatedOn: Math.floor(Date.now() / 1000)
    })
    next();
});

const updateNewFields = new mongoose.Schema({
    InventoryRefId: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        default: null,
    },
    InventoryType: {
        type: String,
        required: true,
        default: 'Default', // Default (or) Purchase
    },
});

const db = mongoose.connection.useDb('practise');
const createSupplierSchema = db.model('Supplier', newSchema, 'Supplier');
const updateSupplierSchema = db.model('Supplier', updateSchema, 'Supplier');
const deleteSupplierSchema = db.model('Supplier', deleteSchema, 'Supplier');
const updateNewFieldsSupplier = db.model('InventoryPayment', updateNewFields, 'InventoryPayment');

module.exports = {
    createSupplierSchema,
    updateSupplierSchema,
    deleteSupplierSchema,
    updateNewFieldsSupplier,
}