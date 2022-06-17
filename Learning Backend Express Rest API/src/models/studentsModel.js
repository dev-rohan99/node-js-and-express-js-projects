const mongoose = require('mongoose');



const dataSchema = mongoose.Schema({
    name : String,
    roll : String,
    class : String,
    skill : String
});

const studentsModel = mongoose.model('students', dataSchema)

module.exports = studentsModel;


