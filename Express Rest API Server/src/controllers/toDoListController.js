const toDoListModel = require("../models/toDoListModel");



const createToDo = (req, res) => {

    let reqBody = req.body;

    let username = req.headers.username;

    let postFromBody = {
        username : username,
        toDoSubject : req.body.toDoSubject,
        toDoDesc : req.body.toDoDesc,
        toDoStatus : req.body.toDoStatus,
        toDoCreateDate : req.body.toDoCreateDate,
        toDoUpdateDate : req.body.toDoUpdateDate
    }

    toDoListModel.create(postFromBody, (err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }
    });

}


// show to do
const showToDo = (req, res) => {

    const username = req.headers.username;
    toDoListModel.find({username : username}, (err, data) => {

        if(err){
            res.status(400).json({
                status : 'Failed',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success',
                data : data
            });
        }

    });

}


// update to do
const updateToDo = (req, res) => {

    const username = req.headers.username;

    let toDoSub = req.body.toDoSubject;
    let toDoDesc = req.body.toDoDesc;
    let toDoId = req.body._id;
    let toDoUpdateDate = Date.now();

    let updateData = {
        toDoSubject : toDoSub,
        toDoDesc : toDoDesc,
        toDoUpdateDate : toDoUpdateDate
    }
    
    toDoListModel.updateOne({_id : toDoId}, { $set : updateData }, {upsert : true}, (err, data) => {

        if(err){
            res.status(400).json({
                status : 'Failed',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }

    });

}


// update to do status
const updateToDoStatus = (req, res) => {

    const username = req.headers.username;

    let toDoId = req.body._id;
    let toDoStatus = req.body.toDoStatus;
    let toDoUpdateDate = Date.now();

    let updateData = {
        toDoStatus : toDoStatus,
        toDoUpdateDate : toDoUpdateDate
    }
    
    toDoListModel.updateOne({_id : toDoId}, { $set : updateData }, {upsert : true}, (err, data) => {

        if(err){
            res.status(400).json({
                status : 'Failed',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }

    });

}



// remove to do
const removeToDo = (req, res) => {

    const username = req.headers.username;

    let toDoId = req.body._id;
    
    toDoListModel.remove({_id : toDoId}, (err, data) => {

        if(err){
            res.status(400).json({
                status : 'Failed',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }

    });

}



// search to do with status
const searchToDo = (req, res) => {

    const username = req.headers.username;
    // let username = req.body.username;
    let toDoStatus = req.body.toDoStatus;
    
    toDoListModel.find({ username : username, toDoStatus : toDoStatus }, (err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }

    });

}


// search to do with status
const searchToDoByDate = (req, res) => {

    const username = req.headers.username;
    let toDate = req.body.toDate;
    let fromDate = req.body.fromDate;
    
    toDoListModel.find({ username : username, toDoCreateDate : { $gte : new Date(fromDate), $lte : new Date(toDate) } }, (err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }

    });

}



module.exports = {
    createToDo,
    showToDo,
    updateToDo,
    updateToDoStatus,
    removeToDo,
    searchToDo,
    searchToDoByDate
};

