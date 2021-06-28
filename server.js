const http = require('http');
const dirTree = require("directory-tree");
const express = require("express");
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static("www"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/www/index.html");
});

// menus do json estático
// let data = require("./www/menu.json");

//menu dinâmico
const data = dirTree('./', { extensions: /\.html/, exclude: /(.vscode|.git|www|games|node_modules)$/ });


// fetch('http://localhost:5500/www/menu.json')
//     .then(res => data = res.json());
// .then(json => console.log(json));

// const data = fetch(`/www/menu.json`).json();

io.on('connect', socket => {
    console.log('Client connected');
    socket.emit('menu', data);
    // de um db
    // socket.emit('storedComments', commentObjectArray);  

    // Listen pelos comentários
    // socket.on('comment', (data) => {
    //     // executa função no cliente
    //     socket.broadcast.emit('remoteComment', data);
    // });
});

// port process.env.PORT
let port = process.env.PORT | 5500;
const listener = server.listen(port, () => {
    console.log(`listening on http://localhost:${port}/`);
});