function Exibir(){
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value
    let valorfinal = ((parseFloat(valor1) + parseFloat(valor2))/ 2);

    if (valorfinal < 7){
        document.getElementById('resposta').innerHTML="Sua média é "+valorfinal+", Você foi reprovado."
    }else if(valorfinal === 10){
        document.getElementById('resposta').innerHTML="Parabens você teve a média"+valorfinal+", Você foi aprovado com distinção."
    }else{
        document.getElementById('resposta').innerHTML="Sua média é "+valorfinal+", Você está aprovado."
    }
}