const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');




const userVarify = async (req, res, next) =>{

    if( req.headers.authorization ){
        const token = req.headers.authorization.split(' ')[1];
        // let token = req.headers['token-key'];
        const { id } = jwt.verify(token, 'abir12345');
        req.user = await UserModel.findById(id);
        next();
    }else{
        res.status(202).json({
            message : 'Token not found!'
        });
    }

}






module.exports = userVarify;


