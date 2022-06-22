const mongoose = require('mongoose');

// connect to mongoDB
let URI = 'mongodb://127.0.0.1:27017/school';

let OPTION = { user : '', password : '' };

const connectMongo = async () => {
    try{
        let connection = await mongoose.connect(URI);
        console.log('Connected!');
    }catch(err){
        console.log(err);
    }
}



// mongoose.connect(URI, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log('Connected Successfully');
// }).catch((err) => {
//     console.log('Not Connected');
// });




module.exports = connectMongo;