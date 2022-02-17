function limpar(){
    document.getElementById("visor").innerHTML = 0
}

function setaZero() {
    var value = document.getElementById("visor").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("visor").innerHTML = value;
    }
}

function display(value) {
    setaZero()
    document.getElementById("visor").innerHTML += value;
}

function calcular() {
    setaZero()
    var equacao = document.getElementById("visor").innerHTML;
    var resultado = eval(equacao);
    document.getElementById('visor').innerHTML = resultado;
}
function porcentagem() {
    var value = document.getElementById("visor").innerHTML;
    value = value / 100;
    document.getElementById("visor").innerHTML = value;
}




