function exibir() {
    let idade = document.getElementById("idade").value

    if (idade < 18){
        document.getElementById('resposta').innerHTML="Você é menor de idade"
    }else{
        document.getElementById('resposta').innerHTML="Você é maior de idade"
    }
}