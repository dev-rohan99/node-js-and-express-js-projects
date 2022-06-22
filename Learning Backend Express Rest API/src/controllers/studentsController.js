const studentsModel = require('../models/studentsModel');


const InsertData = (req, res) => {

    let reqBody = req.body;

    studentsModel.create(reqBody, (err) => {
        if(err){
            res.status(400).json({
                status : 'Failed'
            });
        }else{
            res.status(201).json({
                status : 'Success'
            });
        }
    });

}

const readStudent = (req, res) => {

    let query = {};
    let projection = 'name roll class';
    studentsModel.find(query, projection, (err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed',
                data : 'Not Found'
            });
        }else{
            res.status(200).json({
                status : 'Success',
                data : data
            });
        }
    });

}


// update student data
const updateStudent = (req, res) => {

    let id = req.params.id;
    let query = { _id : id };
    studentsModel.updateOne(query, req.body, (err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed!'
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }
    });

}


// delete id
const deleteData = (req, res) => {

    let id = req.params.id;
    let query = { _id : id };
    studentsModel.remove(query, (err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed!'
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
    InsertData,
    readStudent,
    updateStudent,
    deleteData
}

