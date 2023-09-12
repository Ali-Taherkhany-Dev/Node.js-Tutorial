const http = require('http');

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const getName = () => {
//     return new Promise((resolve) => {
//         readline.question(`What's your name? `, (name) => {
//             console.log(`Hi ${name}!`);
//             readline.close();
//             return name
//         });
//     });
// };

// Openning A Server And Show The Name
const hostName = '127.0.0.1';
const port = 3000;

const runServer = (server) => {
    eval(`const ${server} = 'ali'`)
}
runServer('ali')

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/plain');
//     res.write('hello world')
//     res.end(userName);
//     console.log()
// });

// let userName
// getName(res => console.log(res)).then(
//     server.listen(port, hostName, () => {
//         console.log(`Server running at http://${hostName}:${port}/`);
//     })
// );
