function Exibir(){
    let valor1 = document.getElementById('n1').value
    //let valor2 = document.getElementById('n2').value

    document.getElementById('resposta').innerHTML = 'Valor total ganho por mês é R$' + (parseFloat(valor1) * 0.08) + '.'
} 