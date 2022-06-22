const UserModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const createProfile = (req, res) => {

    let reqBody = req.body;
    UserModel.create(reqBody, (err, data) => {
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


// user login

const userLogin = async (req, res) => {

    const { username, password } = req.body;
    const loginData = await UserModel.findOne({ username });
    
    if(!loginData){
        res.status(400).json({
            status : 'Failed! Try again!'
        });
    }else{

        if( bcrypt.compare(password, loginData.password) ){

            const token = jwt.sign({
                id : loginData._id
            }, 'abir12345', {
                expiresIn : '3d'
            });

            res.status(200).json({
                status : 'Welcome Back!',
                id : loginData._id,
                firstName : loginData.firstName,
                lastName : loginData.lastName,
                email : loginData.email,
                cellNo : loginData.cellNo,
                location : loginData.location,
                username : loginData.username,
                password : loginData.password,
                token : token
            });

        }else{
            res.status(401).json({
                status : 'Incorrect password!'
            });
        }

    }

}



// find profile

const profileShow = (req, res) => {
    res.status(200).json(req.user);
}

// update user
const updateUser = async (req, res) => {

    const editData = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new : true });
    
    res.status(200).json({
        status : `Updated ${editData.firstName} ${editData.lastName}'s data successful!`
    });
    
    // if(!editData){

    //     res.status(400).json({
    //         message : 'Edit data not found!'
    //     });

    // }else{

        

    // }

}




module.exports = {
    createProfile,
    userLogin,
    profileShow,
    updateUser
}

