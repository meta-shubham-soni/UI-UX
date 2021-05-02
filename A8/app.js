let http = require('http');
let fs = require('fs');

// app.use(express.static("public"));

let handleRequest = (request, response) => {
    // console.log(request.headers.accept.split(',')[0]);
    if(request.headers.accept.split(',')[0] == 'text/css') {
        console.log('TRUE');

        fs.readFile('./public/css/style.css', (err, data)=>{
            response.writeHeader(200, {'Content-Type': 'text/css'});
            response.write(data);
            response.end();
        });  
   }

   else if(request.headers.accept.split(',')[0] == 'image/avif'){
    fs.readFile('./public/parking.jpg', (err, data)=>{
        response.writeHeader(200, {'Content-Type': 'image/avif'});
        response.write(data);
        response.end();
    }); 
   }

   else if(request.headers.accept.split(',')[0]  == '*/*'){
    console.log(request.url + "ajsd");
    fs.readFile('.'+request.url, (err, data)=>{
        response.writeHeader(200, {'Content-Type': '*/*'});
        response.write(data);
        response.end();
    }); 
   }

   else {
       console.log('FALSE');    
    // console.log(request.headers.accept.split(',')[0]);
       fs.readFile('index.html', function(err, data){
           response.writeHead(200, {'Content_type': 'text/html'});
           response.write(data);
           response.end();
       });
   };

};
http.createServer(handleRequest).listen(8080);