const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const upload = multer({ destination: 'uploads' });

app.use(bodyParser.json());
app.use(upload.array());
app.use(express.static('public'));

// use middleware

// app.use((req, res, next) => {
//     console.log('I am application level middleware!!!');
//     next();
// });

// npm i/install express
// res.send() method indicates the body
// res.end() method indicates the latest situation

// use specific route middleware
app.use('/api/students', (req, res, next) => {
    console.log('I am application level middleware!!!');
    next();
});

// get method with json response
app.get('/api/students', (req, res) => {

    let data = [
        {
            name : 'Rohan Mostofa',
            age : 20,
            location : 'Narail, Dhaka, Bangladesh'
        }
    ]

    res.status(200).json(data);

});

// set value in get method using query
app.get('/', (req, res) => {
    
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.status(200).end(firstName + ' ' + lastName);

});

// set value in header
app.get('/api', (req, res) => {
    
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.end(firstName + ' ' + lastName);

});

// download response
app.get('/api/students/image', (req, res) => {
    res.download('./uploads/js.png');
});

// post method
app.post('/api/students', (req, res) => {
    res.status(201).send('Post Method Done!!!')
});

// set value in post method using query
app.post('/', (req, res) => {
    
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.status(200).end(firstName + ' ' + lastName);

});

// header property in post method
app.post('/header', (req, res) => {
    
    let username = req.header('username');
    let password = req.header('password');
    res.status(200).send("Username : " + username + ", Password : " + password);

});

// post application json using body-parser
app.post('/api/myData', (req, res) => {
    
    let getJsonData = {...req.body};
    res.status(200).send(getJsonData);

});

// multipart form data
app.post('/api/multipart', (req, res) => {
    
    let getJsonData = {...req.body};
    res.status(200).send(JSON.stringify(getJsonData));

});


// file upload system
// let storage = upload.diskStorage({
//     destination : (req, file, cb) => {
//         cb(null, './uploads');
//     },
//     filename : (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });

// let uploadCatch = multer({storage : storage}).single('myfile');

// app.post('/api/uploads', (req, res) => {
//     uploadCatch(req, res, (err) => {
//         if(err){
//             res.send('File upload failed!');
//         }else{
//             res.send('File upload success!');
//         }
//     });
// });


// put and patch method
app.put('/api/students/1', (req, res) => {
    res.status(202).send('Put Method Done!!!')
});

app.patch('/api/students/1', (req, res) => {
    res.status(202).end('Patch Method Done!!!')
});

// delete method
app.delete('/api/students/1', (req, res) => {
    res.status(202).end('Delete Method Done!!!')
});

// redirect method
app.get('/bangladesh', (req, res) => {
    res.status(200).redirect('http://localhost:8000/arabia');
});

app.get('/arabia', (req, res) => {
    res.status(200).send('This is Arabia!!!');
});

// header response || append method
app.get('/header', (req, res) => {
    res.append('name', 'Rohan Mostofa');
    res.append('location', 'Narail, Dhaka, Bangladesh');
    res.status(201).end('This is header response!');
});

// response cookies
app.get('/cookies', (req, res) => {
    res.cookie('name', 'Rohan Mostofa');
    res.cookie('location', 'Narail, Dhaka, Bangladesh');
    res.status(200).end('This is cookies response!');
});

// cookies clear
app.get('/cookies-clear', (req, res) => {
    res.clearCookie('name');
    res.clearCookie('location');
    res.status(200).end('cookies clear success!');
});


app.listen(8000, () => {
    console.log('Server run success!');
})






