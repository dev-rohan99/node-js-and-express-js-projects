const jwt = require('jsonwebtoken');



const authTokenCreate = (req, res) => {

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



module.exports = authTokenCreate



