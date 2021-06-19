async function jax(fonte, dest) {
    !dest ? dest = "myul" : dest;
    document.getElementById(dest).innerHTML = await (await fetch(`./page/${fonte}.html`)).text();
}

async function menu() {
    const data = await (await fetch(`menu.json`)).json();
    console.log(data);
    console.log(data[0]);
    console.log(data.menu.length);
    for (var i = 0, j = data.menu.length; i < j; i++) {
        var root_menu = data.menu[i];
        if (root_menu.hasOwnProperty("MenuId")) {
            document.getElementById("myul").innerHTML += "<li>" + root_menu.MenuName + "</li>";

            if (root_menu.hasOwnProperty("Menus") && root_menu.Menus.length > 0) {
                document.getElementById("myul").innerHTML += "<li><ul id='menu_" + root_menu.MenuId + "'>";
                for (var n = 0, m = root_menu.Menus.length; n < m; n++) {
                    var sub_menu = root_menu.Menus[n];
                    if (sub_menu.hasOwnProperty("MenuId")) {
                        document.getElementById("menu_" + root_menu.MenuId).innerHTML += "<li>" + sub_menu.MenuName + "</li>";
                    }
                }
                document.getElementById("myul").innerHTML += "</li></ul>";
            }

        }
    }
}

window.onload = menu();