const mongoose = require('mongoose');
const colors = require('colors')


// set mongodb connection
const connectMongoDB = async () => {

    try{

        let connect = await mongoose.connect('mongodb+srv://rohanNode:d41q9V7R8FiFR9uc@ourrawnodejsclustter.hasb1.mongodb.net/first-express?retryWrites=true&w=majority');
        console.log('Connected!'.bgGreen);

    }catch(err){
        console.log(`${err}`.bgRed);
    }

}





module.exports = connectMongoDB;

