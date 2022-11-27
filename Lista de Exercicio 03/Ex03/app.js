function Exibir(){
    let valor1= document.getElementById('n1').value
    let noite = document.body.style.backgroundImage="url('img/noite.jpg')";
    let dia = document.body.style.backgroundImage="url('img/dia.jpg')";

    if (valor1 == 1){
        document.getElementById("resposta").innerHTML = "Em seu pais agora é "+ dia;
    } else if (valor1 == 2){
        document.getElementById("resposta").innerHTML = "Em seu pais agora é "+ noite;
    }
}