const http = require('http');
const sysinfo = require('systeminformation');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World :)');
})

sysinfo.system((data) => {
    console.log('System Information:');
    console.log(data);
})

server.listen(8080, () => {
    console.log('Listening on port 8080');
    console.log('\n');
})