function Exibir(){
    let valor1 = document.getElementById('n1').value

    document.getElementById('resposta').innerHTML = 'Com esse valor você consegue abastecer '+ ((parseFloat(valor1) / 5) * 1) + ' Litros.'
    document.getElementById('resposta2').innerHTML = 'Com essa quantidade de combustivel você vai conseguir percorrer '+ ((parseFloat(valor1) / 5) * 20) + ' KM.'
}