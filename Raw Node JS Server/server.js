import http from 'http';
import dotenv from 'dotenv';
import { readFileSync, writeFileSync } from 'fs';
import { findLastId } from './utility/functions.js';


// environment init

dotenv.config();
console.log(process.env.APP_NAME);
const PORT = process.env.SERVER_PORT;


// data management
const student_json = readFileSync('./data/students.json');
const student_obj = JSON.parse(student_json);


// create server

http.createServer((req, res) => {

    if( req.url == '/api/students' && req.method == 'GET' ){
        res.writeHead(200, { 'Content-Type' : 'application/json' });
        res.end(student_json);
    }else if( req.url.match(/\/api\/students\/[0-9]{1,}/) && req.method == 'GET' ){
        
        let idNumb = req.url.split('/')[3];
        
        if( student_obj.some((data) => data.id == idNumb) ){
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            res.end(JSON.stringify(student_obj.find((data) => data.id == idNumb)));
        }else{
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            res.end(JSON.stringify({
                alert : 'Student data not found'
            }));
        }

    }else if( req.url == '/api/students' && req.method == 'POST' ){

        let studentData = '';

        req.on('data', (chunk) => {
            studentData += chunk.toString();
        });

        req.on('end', () => {
            let { nam, skill, location } = JSON.parse(studentData);
            
            student_obj.push({
                id : findLastId(student_obj),
                nam : nam,
                skill : skill,
                location : location
            });

            writeFileSync('./data/students.json', JSON.stringify(student_obj))
        })

        res.writeHead(200, { 'Content-Type' : 'application/json' });
        res.end(JSON.stringify({
            status : 'You can post your data.'
        }));

    }else if( req.url.match(/\/api\/students\/[0-9]{1,}/) && req.method == 'DELETE' ){

        let idNumb = req.url.split('/')[3];
        let deletedData = student_obj.filter((data) => data.id != idNumb);
        writeFileSync('./data/students.json', JSON.stringify(deletedData))

        res.writeHead(200, { 'Content-Type' : 'application/json' });
        res.end(JSON.stringify({
            status : 'You can delete any data.'
        }));

    }else if( req.url.match(/\/api\/students\/[0-9]{1,}/) && req.method == 'PUT' || req.url.match(/\/api\/students\/[0-9]{1,}/) && req.method == 'PATCH' ){

        let idNumb = req.url.split('/')[3];
        

        if( student_obj.some((data) => data.id == idNumb) ){

            let data = '';

            req.on('data', (chunk) => {
                data += chunk.toString();
            });

            req.on('end', () => {
                let updatedData = JSON.parse(data);

                student_obj[student_obj.findIndex((data) => data.id == idNumb)] = {
                    id : idNumb,
                    nam : updatedData.nam,
                    skill : updatedData.skill,
                    location : updatedData.location
                };

                writeFileSync('./data/students.json', JSON.stringify(student_obj));
            });


            res.writeHead(200, { 'Content-Type' : 'application/json' });
            res.end(JSON.stringify({
                status : 'Edit data successfull'
            }));

        }else{
            res.writeHead(200, { 'Content-Type' : 'application/json' });
            res.end(JSON.stringify({
                alert : 'Data not found'
            }));
        }

    }else{
        res.writeHead(200, { 'Content-Type' : 'application/json' });
        res.end(JSON.stringify({
            error : 'INVALID ROUTE'
        }));
    }

}).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});


