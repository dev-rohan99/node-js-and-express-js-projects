const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');
// security middleware
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const hpp = require('hpp');

app.use(bodyParser.json());

// security middleware implement
app.use(cors());
app.use(hpp());
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());


// request rate limiting
const limiter = rateLimit({
    windowMs : 60 * 1000,
    max : 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.use( '/api/students', router );

// undefiend route
app.use('*', ( req, res ) => {
    res.status(404).json({
        status : 'Failed!',
        data : 'Not found!'
    });
});


module.exports = app;
