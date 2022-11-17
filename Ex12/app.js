function ligar() {

    let imagem = document.getElementById('lamp').src;
    let imagem_ligado = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
    let imagem_desligado = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';

    if (imagem == imagem_ligado) {
        document.getElementById('lamp').src = imagem_desligado;
    } else {
        document.getElementById('lamp').src = imagem_ligado;
    }
}
document.getElementById("lamp").addEventListener("click", ligar);