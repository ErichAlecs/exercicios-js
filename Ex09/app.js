

function Exibir() {
    let valor1 = document.getElementById('n1').value
    let sexo1 = document.getElementById('n2').value

    if (sexo1 == 'Masculino') {
        document.getElementById('resposta').innerHTML = 'O seu peso ideal é ' + ((72.7 * parseFloat(valor1)) - 58) + 'Kilos.'
    } else {
        document.getElementById('resposta').innerHTML = 'O seu peso ideal é ' + ((62.1 * parseFloat(valor1)) - 44.7) + 'Kilos.'
    }
}