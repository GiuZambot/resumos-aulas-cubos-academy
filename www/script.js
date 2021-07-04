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

function criaMenu(itens) {

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].hasOwnProperty("name") && itens[i].size > 0) {
            const titulo = itens[i].name.replace(/.html/ig, "").replace(/-/ig, " ").toCap();
            let btn = createNode('button');
            btn.className = 'btn';
            btn.innerHTML = titulo;
            if (itens[i].type == "file") {
                btn.onclick = () => ver(itens[i].path);
            } else {
                btn.onclick = () => subMenu(i);
            }
            append(RS, btn);
        }
    }
}

function subMenu(menuItem) {
    MenuNow.push(menuItem);
    console.log(MenuNow);

    RS.innerHTML = ``;
    if (dataMenuNow) {
        dataMenuNow = dataMenuNow[menuItem].children;
    } else {
        dataMenuNow = dataMenu[menuItem].children;
    }
    console.log(dataMenuNow);

    criaMenu(dataMenuNow);
    let btn = createNode('button');
    btn.className = 'btn';
    btn.innerHTML = "VOLTAR";
    btn.onclick = () => menu();
    append(RS, btn);
}

async function menu(data) {
    dataMenuNow = null;
    MenuNow = [];
    console.log("Menu Inicial");
    RS.innerHTML = ``;
    !dataMenu ? dataMenu = data.children : false;
    criaMenu(dataMenu);
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