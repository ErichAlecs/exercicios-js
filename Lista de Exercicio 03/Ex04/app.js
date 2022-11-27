function Exibir(){
    let valor1= document.getElementById('n1').value;
    valor1 = valor1.toLowerCase();

    if (valor1 =='a' || valor1 == 'e' || valor1 == 'i' || valor1 == 'o' || valor1 == 'u'){
        document.getElementById("resposta").innerHTML = "O caractere inserido, " + valor1 + ", é uma vogal";
    } else{
        document.getElementById("resposta").innerHTML = "O caractere inserido, " + valor1 + ", é uma consoante";
    }
}