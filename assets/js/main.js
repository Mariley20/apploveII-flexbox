var img;
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
agregarImg();

var btnImages = document.getElementsByClassName('box-work')[0];
btnImages.addEventListener('click', activarModal);

function activarModal(event) {
    var element = event.target.nodeName;
    if (element == 'IMG') {
        img = event.target;
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }
}
span.onclick = function() {
    modal.style.display = "none";
}

function agregarImg() {
    var imagenes = [
        "assets/img/img-1.jpg",
        "assets/img/img-2.jpg",
        "assets/img/img-3.jpg",
        "assets/img/img-4.jpg",
        "assets/img/img-5.jpg",
        "assets/img/img-6.jpg",
        "assets/img/img-7.jpg",
        "assets/img/img-8.jpg",
        "assets/img/img-9.jpg"
    ];
    var padre = document.getElementsByClassName('box-work')[0];
    var cantidadImg = Math.ceil((imagenes.length - 1) / 3);

    for (var i = 0; i < imagenes.length;) {
        var tag_div = document.createElement('div')
        for (var j = 0; j < cantidadImg; j++) {
            var tag_img = document.createElement('img');
            tag_img.setAttribute('src', imagenes[i]);
            tag_img.alt = 'imagen ' + i;
            tag_div.appendChild(tag_img);
            i++;
        }
        padre.appendChild(tag_div);
    }
}