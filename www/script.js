String.prototype.toCapitalize = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
}

async function menu(data) {
    const menu = data.children;
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].hasOwnProperty("name")) {
            const titulo = menu[i].name.replace(/-/ig, " ").toCapitalize();
            document.getElementById("respostas").innerHTML += "<button class='btn'>" + titulo + "</button>";
        }
    }
}

// conecta com servidor
var socket = io.connect();

// escuta pelo emit do servidor
socket.on('menu', menu);

// exemplo para emitir requisição de menus
// socket.emit('comment', {
//     username: currentUserName,
//     timestamp: domComment.querySelectorAll('span')[0].innerText,
//     comment: domComment.querySelectorAll('p')[0].innerText
// });