function exibiHM() {

    var header = document.getElementById("header")
    var menu = document.querySelector(".menuLateral")
    var htmlH = `<div class="container">
        <div class="menu1">
            <div>
                <input type="checkbox" id="menu">
                <label for="menu" class="menuCheck">
                    <div class="menuHamburgue">
                        <div class="hamburgue"></div>
                        <div class="hamburgue"></div>
                        <div class="hamburgue"></div>
                    </div>
                </label>        
            </div>
            <a href="index.html" id="logo"></a>
        </div>
        <div class="search">
            <form method="GET" class="srcForm">
                <input type="search" id="tagsSrc"  class="boxSrc" name="search" />
                <input type="submit" id="tagsSrc" class="butomSrc" value="S" />
            </form>
        </div>
        <div id="login-area">
            <input type="button" class="login" value="FAZER LOGIN">
        </div>
    </div>`
    var htmlM = `<div >
        <nav>
            <ul class="menuEsquerdo">
                <a class="linkMenu" href="/"><li class="menuAtivo">Home</li></a>
                <a class="linkMenu" href="/"><li class="menuAtivo">Em alta</li></a>
                <a class="linkMenu" href="/"><li class="menuAtivo">Explorar</li></a>
                <div class="barraBot"></div>
            </ul>
        </nav>
    </div>`
    header.innerHTML = htmlH
    menu.innerHTML = htmlM
}
exibiHM()

let btnMenu = document.getElementById("menu");
var menuLateral = document.querySelector(".menuLateral");
var conteudoGeral = document.querySelector("#conteudoGeral")
var bodyContainer = document.querySelector("#bodyContainer")

function btnM() {

    const menu = menuLateral.style.display;
    menu === 'none' ?
        menuLateral.style.display = 'flex' :
        menuLateral.style.display = 'none';
    const geral = conteudoGeral.style.justifyContent;
    geral === '' ?
        conteudoGeral.style.justifyContent = 'center' :
        conteudoGeral.style.justifyContent = '';
    const body = bodyContainer.style.marginLeft;
    body === '180px' ?
        bodyContainer.style.marginLeft = '20px' :
        bodyContainer.style.marginLeft = '180px';
}

btnMenu.addEventListener('click', btnM)
