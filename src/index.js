const express = require("express");
const dbConn = require("./config/db");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerConfig');
const authMiddleware = require("./middleware/authMiddleware");
const cors = require('cors');

const authRoute = require("./routes/authRoute");
const medicineRoute = require('./routes/medicineRoute');
const genericRoute = require('./routes/genericNameRoute');
const medicineNameRoute = require('./routes/medicineNameRoute');
const supplierRoute = require('./routes/supplierRoute');
const purchaseRoute = require('./routes/inventoryPurchaseRoute');

dbConn();
require('dotenv').config();

const app = express();

app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:8080', // Allow requests from this origin
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true
// }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(authMiddleware);

app.use('/api/users', authRoute);
app.use('/api/medicines', medicineRoute);
app.use('/api/generic', genericRoute);
app.use('/api/medicinename', medicineNameRoute);
app.use('/api/supplier', supplierRoute);
app.use('/api/purchase', purchaseRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is listening to the port: ${PORT}`);
})