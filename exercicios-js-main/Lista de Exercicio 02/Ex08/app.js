function Exibir(){
    let valor1 = document.getElementById('n1').value

    document.getElementById('resposta').innerHTML = 'O seu peso ideal é '+ ((72.7 * parseFloat(valor1)) - 58 ) + 'Kilos.'
}