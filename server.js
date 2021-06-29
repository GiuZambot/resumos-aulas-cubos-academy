const dirTree = require("directory-tree");
const express = require("express");
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('www'));

app.use(express.static('./'))

app.use(express.static(__dirname + 'resumos-aulas-cubos-academy'));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/www/index.html");
});

app.get(/i/, function (req, res) {
    res.sendFile('/i/');
});

// menus do json estático
// let data = require("./www/menu.json");

//menu dinâmico
const data = dirTree('./', { extensions: /\.html/, exclude: /(.vscode|.git|www|games|node_modules)$/ });

// const lineReader = require('line-reader');
// lineReader.eachLine('./teste.txt', function (line, last) {
//     console.log(line);
//     return false;
// });

// fetch('http://localhost:5500/www/menu.json')
//     .then(res => data = res.json());
// .then(json => console.log(json));

// const data = fetch(`/www/menu.json`).json();

io.on('connect', socket => {
    console.log('Client connected');
    // io.emit('menu', data);
    // socket.emit('menu', data);
    // de um db
    // socket.emit('storedComments', commentObjectArray);  

    // Listen pelos comentários
    // socket.on('comment', (data) => {
    //     // executa função no cliente
    //     socket.broadcast.emit('remoteComment', data);
    // });

    socket.on('pullMenu', () => {
        // enviar menu
        socket.emit('menu', data);
    });

});

// port process.env.PORT
let port = process.env.PORT | 5500;
// const listener = server.listen(port, () => {
//     console.log(`listening on http://localhost:${port}/`);
// });
const host = process.env.YOUR_HOST || 'localhost';
http.listen(port, host, () => {
    console.log(`listening on http://localhost:${port}/`);
});