var http = require('http');
var fs = require('fs');

var text = "";
var server = http.createServer(function(req, res){
    if (req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<html><body><p>${text}</p></body></html>`);
        res.end();
    }
    else if (req.url == '/admin'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(JSON.stringify({'message': 'This is admin page'}));
        res.end();
    }
    else{
        res.end('Invalid Request');
    }
});

fs.readFile('textFile.txt', function(err, data){
    if(err) throw err;
    text = data;
});

server.listen(5000);
