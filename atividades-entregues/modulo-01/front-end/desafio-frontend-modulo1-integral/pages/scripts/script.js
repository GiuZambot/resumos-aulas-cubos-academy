const tools = {
    btnActive: function () {
        const url = window.location.pathname;
        const page = url.slice(url.lastIndexOf('/') + 1).replace(/-\w+|.html/g, "");
        const el = document.querySelector(`[class="b-btn ${page}"]`);
        if (el) { el.classList.add("b-btn__active"); };
    },
    btnLinks: function () {
        const links = document.querySelectorAll(`[class*="b-btn"]`);
        for (let i of links) {
            const el = document.querySelectorAll(`[class*="b-btn ${i.classList[1]}"]`);
            if (el) {
                for (let j of el) {
                    j.addEventListener("click", () => window.location = `./${i.classList[1]}.html`);
                };
            };
        };
    },
    dark: function () {
        var style = document.createElement('style');
        style.setAttribute("type", "text/css");
        var textNode = document.createTextNode("@import url('./css/dark.css');");
        style.appendChild(textNode);
        document.getElementsByTagName('head')[0].appendChild(style);
        console.log(document.head.lastChild);
    }
};

window.onload = () => {
    tools.btnActive();
    tools.btnLinks();
}