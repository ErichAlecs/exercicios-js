function Exibir(){
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value

    document.getElementById('resposta').innerHTML = 'A soma dos numeros é ' + (parseFloat(valor1) + parseFloat(valor2)) + '.'
} 