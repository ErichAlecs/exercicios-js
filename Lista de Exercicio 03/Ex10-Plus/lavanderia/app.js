function Exibir(){
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value
    let valorfinal = parseFloat(valor2) * parseFloat(valor1)

    document.getElementById('resposta').innerHTML = parseFloat(valorfinal)
}