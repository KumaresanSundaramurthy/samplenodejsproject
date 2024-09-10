const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kumarbtechguru:kumaresan123@kumaresancluster.gzzbv.mongodb.net').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Define the schema and model
const medicinePresentationSchema = new mongoose.Schema({
    MedicinePresentationName: {
        type: String,
        required: true,
    }
});

const medicineData = mongoose.connection.useDb('practise').model('MedicinePresentation', medicinePresentationSchema, 'mpresentation');

// Retrieve data from the collection
const retrieveData = async () => {
    try {
        const data = await medicineData.find({}); // or findOne(), etc.
        console.log('Retrieved data:', data);
    } catch (err) {
        console.error('Error retrieving data:', err);
    }
};

retrieveData();