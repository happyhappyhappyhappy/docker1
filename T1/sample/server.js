const http = require('http');
const server = http.createServer(
    (req,res) => {
    res.writeHead(200,{'Content-Type': '"text/html"; charset=utf-8'});
    res.write('<H1>Hello World Yamanaka Koji</H1>');
    res.end;     
    }
);
const port=8080;
server.listen(port);
console.log('Server Listern at Port-> ' + port);

