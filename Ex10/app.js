function Exibir(){
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value
    let bruto = (parseFloat(valor1) * parseFloat(valor2))
    let inss = (parseFloat(bruto) * 0.08)
    let sind = (parseFloat(bruto) * 0.05)
    let ir = (parseFloat(bruto) * 0.11)

    document.getElementById('resposta').innerHTML = 'O seu Salario bruto é R$ '+ (bruto) + '.'
    document.getElementById('resposta2').innerHTML = 'O valor descontado pelo INSS é R$ '+ (inss) + '.'
    document.getElementById('resposta3').innerHTML = 'O valor descontado pelo Sindicato é R$ '+ (sind) + '.'
    document.getElementById('resposta4').innerHTML = 'O valor descontado pelo IR é R$ '+ (ir) + '.'
    document.getElementById('resposta5').innerHTML = 'Seu Salario liquido é R$ ' + (bruto - inss - sind - ir) + '.'
}