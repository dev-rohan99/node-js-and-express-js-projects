const fs = require('fs');
const http = require('http');


const server = http.createServer((req, res) => {


    if( req.url == '/' ){

        // create file

        fs.writeFile('./text.txt', 'Hello World', (err) => {

            if(err){
                res.writeHead(404, { 'Content-Type' : 'text/txt' });
                res.write('Failed!');
                res.end();
            }else{
                res.writeHead(200, { 'Content-Type' : 'text/txt' });
                res.write('Created!');
                res.end();
            }

        });

        // read file

        // fs.readFile('./text.txt', (err, data) => {

        //     if(err){
        //         res.writeHead(404, { 'Content-Type' : 'text/txt' });
        //         res.write('Failed!');
        //         res.end();
        //     }else{
        //         res.writeHead(200, { 'Content-Type' : 'text/txt' });
        //         res.write(data);
        //         res.end();
        //     }

        // });


        // rename file

        // fs.rename('./text.txt', 'hello.txt', (err) => {

        //     if(err){
        //         res.writeHead(404, { 'Content-Type' : 'text/txt' });
        //         res.write('Failed!');
        //         res.end();
        //     }else{
        //         res.writeHead(200, { 'Content-Type' : 'text/txt' });
        //         res.write('File name changed!');
        //         res.end();
        //     }

        // });

        // remove file
    
        // fs.unlink('./text.txt', (err) => {

        //     if(err){
        //         res.writeHead(404, { 'Content-Type' : 'text/txt' });
        //         res.write('Delete Failed!');
        //         res.end();
        //     }else{
        //         res.writeHead(200, { 'Content-Type' : 'text/txt' });
        //         res.write('Deleted');
        //         res.end();
        //     }

        // });


        // let error = fs.unlinkSync('./text.txt');

        // if(error){
        //     res.writeHead(404, { 'Content-Type' : 'text/txt' });
        //     res.write('Delete Failed!');
        //     res.end();
        // }else{
        //     res.writeHead(200, { 'Content-Type' : 'text/txt' });
        //     res.write('Deleted');
        //     res.end();
        // }


        // file exists

        //     // fs.exists('./text.txt', (result) => {

        //     //     if(result){
        //     //         res.writeHead(200, { 'Content-Type' : 'text/txt' });
        //     //         res.write('Success');
        //     //         res.end();
        //     //     }else{
        //     //         res.writeHead(200, { 'Content-Type' : 'text/txt' });
        //     //         res.write('Filed');
        //     //         res.end();
        //     //     }

        //     // });



        //     // let result = fs.existsSync('./text.txt');

        //     // if(result){
        //     //     res.writeHead(200, { 'Content-Type' : 'text/txt' });
        //     //     res.end('True');
        //     // }else{
        //     //     res.writeHead(200, { 'Content-Type' : 'text/txt' });
        //     //     res.end('False');
        //     // }

    }

});

server.listen(5050, () => {
    console.log('Server is running on port 5050...');
});


