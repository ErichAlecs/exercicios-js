function Exibir(){
    let valor1 = document.getElementById('n1').value

    document.getElementById('resposta').innerHTML = valor1 + 'Metros é  ' + (parseFloat(valor1) * 100) + 'CM.'
} 