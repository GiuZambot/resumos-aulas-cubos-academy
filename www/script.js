const RS = document.getElementById('respostas');
let dataMenu = null;
let dataMenuNow = null;
let MenuNow = [];

String.prototype.toCap = function () {
    return this.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function ver(path) {
    window.open(path, "_blank");
}

function criaMenu(menu) {
    console.log(menu);
    if (!menu) return;
    var str = "";
    for (var i in menu) {
        const titulo = menu[i].name.replace(/.html/ig, "").replace(/-/ig, " ").toCap();
        if (menu[i].type == "file") {
            str += "<li class='btn'><a href='./" + menu[i].path + "'>" + titulo + "</a></li>";
        } else if (menu[i].size > 0) {
            str += "<li>" + titulo + "<ul>" + criaMenu(menu[i].children) + "</ul></li>"; 
        }
    }
    return str;
};


async function menu(data) {
    RS.innerHTML = "<ul>" + criaMenu(data.children) + "</ul>";
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

window.onload = () => socket.emit('pullMenu');