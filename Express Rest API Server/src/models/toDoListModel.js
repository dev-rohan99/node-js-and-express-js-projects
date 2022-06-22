const mongoose = require('mongoose');


const toDoListDataSchema = mongoose.Schema({

    username : {
        type : String,
        required : true
    },
    toDoSubject : {
        type : String,
        required : true
    },
    toDoDesc : {
        type : String
    },
    toDoStatus : {
        type : String,
        default : 'New'
    },
    toDoCreateDate : {
        type : Date,
        default : Date.now
    },
    toDoUpdateDate : {
        type : Date,
        default : Date.now
    }

}, {
    versionKey : false
});




const toDoListModel = mongoose.model('toDoList', toDoListDataSchema);

module.exports = toDoListModel;

