const url = require('url');
const fs = require('fs');
const path = require('path');
const cats = require('../data/cats');



module.exports = (res, req) => {
    const pathname = url.parse(req.url).pathname;

    let filePath = path.normalize(
        path.join(__dirname, "./views/home/index.html")
    );

    fs.readFile(filePath, (err, data) => {
        if(err) {
            console.log(err);
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            res.write(404);
            res.end();
            return;
        }

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.write(data);
        res.end();
    });

    if (pathname === '/' && req.method === 'GET') {

        // Implement the logic for the showing home html view

    } else {
        return true;
    }
};