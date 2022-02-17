//função para limpar o display
function limpar(){
    document.getElementById("visor").innerHTML = 0
}

//funcão para setar o némero zero no display
function setaZero() {
    var value = document.getElementById("visor").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("visor").innerHTML = value;
    }
}

//função para setar o valor digitado na calculadora
function display(value) {
    setaZero()
    document.getElementById("visor").innerHTML += value;
}

//função para realizar a operação e setar o resultado no display
function calcular() {
    setaZero()
    var equacao = document.getElementById("visor").innerHTML;
    var resultado = eval(equacao);
    document.getElementById('visor').innerHTML = resultado;
}

//função para calcular porcentagem e setar o valor no display
function porcentagem() {
    var value = document.getElementById("visor").innerHTML;
    value = value / 100;
    document.getElementById("visor").innerHTML = value;
}




