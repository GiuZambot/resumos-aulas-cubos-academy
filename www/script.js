String.prototype.toCapitalize = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const RS = document.getElementById('respostas');
let dataMenu = null;
let dataMenuNow = null;
let MenuNow = [];

function ver(path) {
    const target = document.getElementById('visual');
    target.src = path;
    target.onload = () => autoResize('visual');
}

function autoResize(id) {
    let newheight;
    let newwidth;
    if (document.getElementById) {
        newheight = document.getElementById(id).contentWindow.document.body.scrollHeight;
        newwidth = document.getElementById(id).contentWindow.document.body.scrollWidth;
    }
    document.getElementById(id).height = (newheight) + "px";
    document.getElementById(id).width = (newwidth) + "px";
}

function criaMenu(itens) {

    for (let i = 0; i < itens.length; i++) {
        if (itens[i].hasOwnProperty("name")) {
            const titulo = itens[i].name.replace(/-/ig, " ").toCapitalize();
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