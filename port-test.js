var http = require('http');
let ports = process.argv;

if(ports){
    for(let i = 0; i < ports.length; i++){
        if(!isNaN(ports[i])){
            if(ports[i].startsWith("-") || ports[i].startsWith("--")){
                ports[i] = ports[i].replace(/-/g, '');
            }
            console.log(ports[i])
            createServer(ports[i])
        }
    }

}else{
    console.log("Please provide a port number as argument!")
}

function createServer(PORT){
    var server = http.createServer(function(req, res) {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(`<!DOCTYPE html>
        <html>
        <body>
        
        <h1 align="center">Port ${PORT} is Open!</h1>
        
        </body>
        </html>`);
    });
    
    server.listen(PORT, function() {
        console.log('Server is running at '+PORT);
    });
}
