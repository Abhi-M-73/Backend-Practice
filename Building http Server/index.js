const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    console.log('Req is received');
    const log = `${Date.now()}  ${req.url} : new req recevied \n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end('Home Page');
                break;
            case "/about":
                res.end('About Page');
                break;
            case "/contact":
                res.end('Contact Page');
                break;
            default:
                res.end('404 not found');

        }
    });
});

myServer.listen(8000, () => console.log("Server is started!"));








