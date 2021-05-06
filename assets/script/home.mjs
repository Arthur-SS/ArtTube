import { thumbVideos } from "./thumbVideos.mjs";

var videos = thumbVideos();

function exibirTbn() {
    var exibirThumb = document.getElementById("bodyContainer")
    var html = " "
    videos.forEach(video => {
        html += `<div class="gThumb">
                <a class="link" href="${video.link}" id="${video.id}">
                    <img src=${video.imgT} alt="${video.tituloV}" class="thumbImg"/>
                    <h3> ${video.tituloV}</h3>
                </a>
            </div>`
    })
    exibirThumb.innerHTML = html
};
exibirTbn(videos)


