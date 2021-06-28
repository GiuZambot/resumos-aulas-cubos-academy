async function jax(fonte, dest) {
    !dest ? dest = "myul" : dest;
    document.getElementById(dest).innerHTML = await (await fetch(`./page/${fonte}.html`)).text();
}

String.prototype.toCapitalize = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
}

async function menu(data) {
    console.log(data.children);
    console.log(data.children.length);

    const menu = data.children;
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].hasOwnProperty("name")) {
            const titulo = menu[i].name.replace(/-/ig, " ").toCapitalize();

            document.getElementById("respostas").innerHTML += "<button class='btn'>" + titulo + "</button>";

            // if (menu.hasOwnProperty("Menus") && menu.Menus.length > 0) {
            //     document.getElementById("myul").innerHTML += "<li><ul id='menu_" + menu.MenuId + "'>";
            //     for (var n = 0, m = menu.Menus.length; n < m; n++) {
            //         var sub_menu = menu.Menus[n];
            //         if (sub_menu.hasOwnProperty("MenuId")) {
            //             document.getElementById("menu_" + menu.MenuId).innerHTML += "<li>" + sub_menu.MenuName + "</li>";
            //         }
            //     }
            //     document.getElementById("myul").innerHTML += "</li></ul>";
            // }

        }
    }
}

// window.onload = menu();

// conecta com servidor
var socket = io.connect();

function handleRemoteComments(data) {


    // let li = document.createElement('li');
    // let p = document.createElement('p');
    // p.innerText = data.comment;

    // let spanName = document.createElement('span');
    // spanName.setAttribute('class', 'username');
    // spanName.innerText = data.username;

    // let spanDate = document.createElement('span');
    // spanDate.setAttribute('class', 'timestamp');
    // spanDate.innerText = data.timestamp;

    // li.appendChild(spanName);
    // li.appendChild(spanDate);
    // li.appendChild(p);

    // COMMENTS_LIST.prepend(li);
}

// escuta pelo emit do servidor
socket.on('menu', menu);

// exemplo para emitir requisição de menus
// socket.emit('comment', {
//     username: currentUserName,
//     timestamp: domComment.querySelectorAll('span')[0].innerText,
//     comment: domComment.querySelectorAll('p')[0].innerText
// });