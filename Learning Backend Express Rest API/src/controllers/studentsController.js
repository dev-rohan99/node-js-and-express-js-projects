const studentsModel = require('../models/studentsModel');


const InsertData = (req, res) => {

    let reqBody = req.body;
    studentsModel.create(reqBody, (err, data) => {
        console.log(reqBody);
        console.log(data);
        if(err){
            res.status(400).json({
                status : 'Failed',
                data : err
            });
        }else{
            res.status(201).json({
                status : 'Success',
                data : data
            });
        }
    });

}


module.exports = {
    InsertData
}

