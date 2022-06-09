const MongoClient = require('mongodb').MongoClient;
const URL = "mongodb://127.0.0.1:27017/";


MongoClient.connect(URL, (err, MyMongoClient) => {
    if( err ){
        console.log('Connection Failed!');
    }else{
        console.log('Connected!');
        // InsertData(MyMongoClient);
        // DeleteData(MyMongoClient);
        // DeleteAllData(MyMongoClient);
        // findOneWithoutCondition(MyMongoClient);
        // findOneWithCondition(MyMongoClient);
        // findAllData(MyMongoClient);
        // findAllDataByProjection(MyMongoClient);
        // findAllDataByQuery(MyMongoClient);
        // findAllDataByLimit(MyMongoClient);
        // findAllDataBySort(MyMongoClient);
        // MyUpdateData(MyMongoClient);
        // createNewCollection(MyMongoClient);
        // dleteCollection(MyMongoClient);
    }
});

// insert data
const InsertData = ( MyMongo ) => {

    let myDataBase = MyMongo.db('school');
    let myCollection = myDataBase.collection('students')

    let myData = {
        name : 'Rohan Mostofa',
        roll : '01',
        class : '10',
        location : 'Narail, Dhaka, Bangladesh'
    }

    myCollection.insertOne(myData, (err) => {
        if( err ){
            console.log('Data insert failed!');
        }else{
            console.log('Data insert successful!');
        }
    });
     
}

// delete specific one data
const DeleteData = ( MyMongo ) => {

    let myDataBase = MyMongo.db('school');
    let myCollection = myDataBase.collection('students');
    let deleteItem = {roll:'02'}
    myCollection.deleteOne(deleteItem, (err) => {
        if( err ){
            console.log('Data delete failed, try again!');
        }else{
            console.log('Data delete completed!');
        }
    });

}

// delete all data
const DeleteAllData = ( MyMongo ) => {

    let myDataBase = MyMongo.db('school');
    let myCollection = myDataBase.collection('students');

    myCollection.deleteMany((err, resultObj) => {
        if(err) {
            console.log('Delete Failed!');
        }else{
            console.log('Deleted');
        }
    });

}

// find one data without condition
const findOneWithoutCondition = ( MyMongo ) => {
    
    let myDataBase = MyMongo.db('school');
    let myCollection = myDataBase.collection('students');
    let findObj = {}

    myCollection.findOne(findObj, (err, result) => {
        if( err ){
            console.log('Failed, try again!');
        }else{
            console.log(result);
        }
    });

}

// find one data with condition
const findOneWithCondition = ( MyMongo ) => {

    let myDataBase = MyMongo.db('school');
    let myCollection = myDataBase.collection('students');
    let findObj = {roll:'03'}

    myCollection.findOne(findObj, (err, result) => {
        if( err ){
            console.log('Failed, try again!');
        }else{
            console.log(result);
        }
    });

}

// find all data
const findAllData = ( MyMongo ) => {

    let myDataBase = MyMongo.db('school');
    let myCollection = myDataBase.collection('students');

    myCollection.find().toArray((err, result) => {
        if( err ){
            console.log('Failed, try again!');
        }else{
            console.log(result);
        }
    });

}

// apply projection
const findAllDataByProjection = ( MyMongo ) => {

    let myDataBase = MyMongo.db('school');
    let myCollection = myDataBase.collection('students');

    let itemObj = {};
    let itemProjection = {projection:{class:0,roll:0}}

    myCollection.find(itemObj, itemProjection).toArray((err, result) => {
        if( err ){
            console.log('Failed, try again!');
        }else{
            console.log(result);
        }
    });

}

// find query
const findAllDataByQuery = (MyMongo) => {

    let myDataBase = MyMongo.db('school');
    let myCollection = myDataBase.collection('students');
    
    let query = {location:'Dhaka, Bangladesh', class:'10'}

    myCollection.find(query).toArray((err, result) => {
        if( err ){
            console.log('Failed, try again!');
        }else{
            console.log(result);
        }
    });

}

// limit data system
const findAllDataByLimit = (MyMongo) => {

    let myDataBase = MyMongo.db('school');
    let myCollection = myDataBase.collection('students');

    myCollection.find().limit(20).toArray((err, result) => {
        if( err ){
            console.log('Failed, try again!');
        }else{
            console.log(result);
        }
    });

}

// data sort system
const findAllDataBySort = (MyMongo) => {

    let myDataBase = MyMongo.db('school');
    let myCollection = myDataBase.collection('students');

    let shortPattern = {roll:1}
    let shortPattern2 = {name:1}

    myCollection.find().sort({name:-1}).toArray((err, result) => {
        if( err ){
            console.log('Failed, try again!');
        }else{
            console.log(result);
        }
    });

}

// update data
const MyUpdateData = (MyMongo) => {

    let myDataBase = MyMongo.db('school');
    let myCollection = myDataBase.collection('students');

    let myQuery = {roll:'04'};
    let myUpdateValues = {$set:{name:'Zonayed Ahamed', location:'Uttora, Dhaka, Bangladesh'}}

    myCollection.updateOne(myQuery, myUpdateValues, (err, result) => {
        if( err ){
            console.log('Failed, try again!');
        }else{
            console.log(result);
        }
    });

}

// create new collection
const createNewCollection = (MyMongo) => {

    let myDataBase = MyMongo.db('school');

    myDataBase.createCollection('teachers', (err, result) => {
        if( err ){
            console.log('Failed, try again!');
        }else{
            console.log(result);
        }
    });

}

// create new collection
const dleteCollection = (MyMongo) => {

    let myDataBase = MyMongo.db('school');

    myDataBase.dropCollection('teachers', (err, result) => {
        if( err ){
            console.log('Failed, try again!');
        }else{
            console.log(result);
        }
    });

}




