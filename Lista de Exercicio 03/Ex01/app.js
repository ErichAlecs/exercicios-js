function Exibir(){
    let valor1= document.getElementById('n1').value
    let valor2= document.getElementById('n2').value
    let invalido = "Valor Invalido"

    if (valor1 >= valor2){
        document.getElementById("resposta").innerHTML ="O seu maior numero é " + valor1;
    } else{
        document.getElementById("resposta").innerHTML ="O seu maior numero é " + valor2;
    }
}