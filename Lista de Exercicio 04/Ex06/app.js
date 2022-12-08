function cadastrar(nome, email, numero, cidade) {

    var tb = document.getElementById("tabela");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellemail = linha.insertCell(2);
    var cellnumero = linha.insertCell(3);
    var cellcidade = linha.insertCell(4);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellemail.innerHTML = email;
    cellnumero.innerHTML = numero;
    cellcidade.innerHTML = cidade;

}

function cadastrar1(){
    document.getElementById("formulario").innerHTML
}