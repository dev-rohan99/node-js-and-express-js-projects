const mongoose = require('mongoose');


const userDataSchema = mongoose.Schema({

    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    cellNo : {
        type : String
    },
    location : {
        type : String
    },
    username : {
        type : String,
        unique : true
    },
    password : {
        type : String
    }

}, {
    versionKey : false 
});




const UserModel = mongoose.model('profiles', userDataSchema);

module.exports = UserModel;

