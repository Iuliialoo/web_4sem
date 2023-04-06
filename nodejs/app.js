const express = require("express");
const servers = require('./routes/servers.js');
const path = require('path');
const { log } = require("console");

const app = express();

const hostname = '127.0.0.1'
const port = 3000

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/\nStart: ${new Date()}`)
  })

console.log(path.resolve(__dirname, 'public'));

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(servers)