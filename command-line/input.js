const http = require('http');
const { hostname } = require('os');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let userName;
readline.question(`What's your name? `, (name) => {
    console.log(`Hi ${name}!`);
    userName = name;
    readline.close();
});

// Openning A Server And Show The Name
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end(userName);
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`)
})