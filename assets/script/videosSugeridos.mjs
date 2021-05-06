import { thumbVideos } from "./thumbVideos.mjs";

var sugeridos = thumbVideos();

function exibirSugeridos (){
    var sugeridoContainer = document.querySelector(".sugeridoContainer")
    var html = ""
    sugeridos.forEach(sugestao => {
        html += `<div class="sThumb">
        <a class="linkSug" href="${sugestao.link}" id="${sugestao.id}">
            <img src=${sugestao.imgT} alt="${sugestao.tituloV}" class="thumbImg"/>
            <div class="descThumb"><h3 class="tituloSugestao"> ${sugestao.tituloV}</h3></div>
        </a>
    </div>`
    });
    sugeridoContainer.innerHTML = html
}

exibirSugeridos(sugeridos)