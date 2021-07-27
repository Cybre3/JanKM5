const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const formidable = require("formidable");
const breeds = require("../data/breeds");
const cats = require("../data/cats");



module.exports = (req, res) => {

    const pathname = url.parse(req.url).pathname;

    if (pathname === '/cats/add-cat' && req.method === "GET") {

        //TODO

    } else if (pathname === 'cats/add-breed' && req.method === "GET") {

        //TODO

    } else {
        return true;
    }

};