const mongoose = require('mongoose');



const dataSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    roll : {
        type : Number
    },
    cellNo : {
        type : String,
        validate : {
            validator : (value) => {
                if( value.length === 11 ){
                    return true;
                }else{
                    return false;
                }
            },
            message : 'Must be 11 digit!'
        }
    },
    class : String,
    skill : {
        type : String,
        default : 'No Skills'
    }
}, {
    versionKey : false
});

const studentsModel = mongoose.model('students', dataSchema)

module.exports = studentsModel;


