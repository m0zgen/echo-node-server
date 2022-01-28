const http = require('http');
var url = require("url");
var querystring = require("querystring");

const host = 'localhost';
const port = 8083;
const server = http.createServer();

server.on('request', (request, response) => {
    let body = [];

    let uri = url.parse(request.url);
    let qs = uri.query ? querystring.parse(uri.query) : {};
    let status = qs.status || 200;

    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        console.log(`==== ${request.method} ${request.url}`);
        console.log(`\n> Headers`);
        console.log(request.headers);

        console.log(`\n> Uri`);
        console.log(uri.pathname + " - HTTP " + status);

        console.log(`\n> Body`);
        console.log(body);
        response.end();
    });
}).listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
});