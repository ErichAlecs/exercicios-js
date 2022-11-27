function Exibir(){
    let valor1= document.getElementById('n1').value
    let invalido = "Numero Neutro"

    if (valor1 >= 1){
        document.getElementById("resposta").innerHTML = "Seu numero é positivo";
    } else if (valor1 <= -1){
        document.getElementById("resposta").innerHTML = "Seu numero é negativo";
    } else if(valor1 == 0){
        document.getElementById("resposta").innerHTML = "Seu numero é neutro";
    }
}