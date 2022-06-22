const jwt = require('jsonwebtoken');


const tokenVarify = (req, res, next) => {

    let getToken = req.headers['token-key'];
    jwt.verify(getToken, 'secretkey123', (err, decoded) => {
        if(err){
            res.status(401).json({
                status : 'Invalid Token'
            })
        }else{
            next();
        }
    });

}


module.exports = tokenVarify;







