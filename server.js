const dirTree = require("directory-tree");
const express = require("express");
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('www'));
app.use(express.static('./'));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/www/index.html");
});

//menu dinâmico
const data = dirTree('./', { extensions: /\.html/, exclude: /(.vscode|.git|.github|www|node_modules)$/ });

io.on('connect', socket => {
    socket.on('pullMenu', () => {
        // enviar menu
        socket.emit('menu', data);
    });

});

const port = process.env.PORT || 5500;
http.listen(port, () => {
    console.log(`listening on http://localhost:${port}/`);
});