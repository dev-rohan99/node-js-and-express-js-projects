// call modules
const express = require('express');
const dotenv = require('dotenv').config();
const app = express(); 
const { authCheck } = require('./middleware/authMiddleware.js');
const connectMongoDB = require('./config/db');

// mongo db connection init
connectMongoDB();

// environment variables
const PORT = process.env.SERVER_PORT;

// use middleware
app.use(authCheck);

// request body init
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// import routes
app.use('/api/products', require('./routes/products'));


// set server port method
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


