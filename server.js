'use strict';

const express = require('express');
const pjson = require('./package.json');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1 style="color:green;">Sample Node App - version-${pjson.version}!</h1> \n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);