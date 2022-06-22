const jwt = require('jsonwebtoken');


const createToken = (req, res) => {

    let data = {
        name : "SM Abdullah",
        cellNo : "01542652154",
        class : "11th"
    }

    let token = jwt.sign(data, 'secretkey123', {
        expiresIn : '2d'
    });

    res.status(200).json({
        token : token
    });

}


const decodeToken = (req, res) => {

    let getToken = req.headers['token-key'];
    jwt.verify(getToken, 'secretkey123', (err, decoded) => {
        if(err){
            res.status(401).json({
                status : 'Invalid Token'
            })
        }else{
            res.status(200).json({
                status : 'Success',
                data : decoded
            })
        }
    });
    
}


module.exports = {
    createToken,
    decodeToken
}
