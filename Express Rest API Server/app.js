// basic import
const express = require('express');
const app = new express();
const router = require('./src/routes/api');
const bodyParser =require('body-parser');

// security import
const rateLimit = require('express-rate-limit');
const xssClean = require('xss-clean');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');

// database
const mongoose = require('mongoose');

// security middleware implement
app.use(rateLimit());
app.use(xssClean());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(cors());

// body parser implement
app.use(bodyParser.json());

// request rate limit
const limiter = rateLimit({
    windowMs : (15 * 60 * 1000),
    max : 3000
});

app.use(limiter);


// mongodb connection
let URL = 'mongodb://127.0.0.1:27017/ToDo';
let OPTION = {
    user : '',
    pass : '',
    autoIndex : true
}

mongoose.connect(URL, OPTION, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Success');
    }
});

// route implement
app.use('/api/users', router);

// undifine routes
app.use('*', (req, res) => {
    res.status(404).json({
        status : 'Bad Request!',
        data : 'Not Found!'
    });
});


module.exports = app;

