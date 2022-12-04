function Exibir(){
    let valor1 = document.getElementById('n1').value

    document.getElementById('resposta').innerHTML = ((parseFloat(valor1) / 5) * 20) + ' KM.'
}