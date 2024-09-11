const mongoose = require('mongoose');
const moment = require('moment');

const newInventoryPurchaseSchema = new mongoose.Schema({
    Date: {
        type: Date,
        required: true,
        default: moment().format('YYYY-MM-DD'),
    },
    MedicinePresentationRefId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    MedicineNameRefId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    GenericNameRefId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    SupplierRefId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
    },
    UnitPrice: {
        type: Number,
        required: true,
    },
    TotalPurchasePrice: {
        type: Number,
        required: true,
        default: 0,
    },
    UnitSalePrice: {
        type: Number,
        required: true,
    },
    UnitType: {
        type: String,
        maxlength: 15,
    },
    PurchasePaid: {
        type: Number,
        default: 0,
    },
    PurchaseDue: {
        type: Number,
        default: 0,
    },
    ExpireDate: {
        type: Date,
        required: true,
    }
}).pre('save', function(next) {
    if(this.Quantity > 0 && this.UnitPrice > 0) {
        this.TotalPurchasePrice = parseFloat(this.Quantity * this.UnitPrice);
    } else {
        this.TotalPurchasePrice = 0;
    }
    next();
})

const db = mongoose.connection.useDb('practise');

const createInventoryPurchase = db.model('InventoryPurchase', newInventoryPurchaseSchema, 'InventoryPurchase');

module.exports = {
    createInventoryPurchase,
}