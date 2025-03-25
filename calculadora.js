const submit = document.getElementById('submit');

submit.addEventListener('click', function(event){
    event.preventDefault();

    const op1 = parseInt(document.getElementById('op1').value)
    const operador = document.getElementById('operador').value
    const op2 = parseInt(document.getElementById('op2').value)

    let resultado;

if (operador == "+") {
    resultado = op1+op2;
} else if (operador == "-") {
    resultado = op1-op2;
} else if (operador == "*") {
    resultado = op1*op2;
} else if (operador == "/") {
    if (op2 == 0) {
        resultado = "ERROR: ¡No se puede dividir por cero!";
    } else {
        resultado = op1/op2
    }
}else {
    resultado =  "ERROR: Operador No Válido!"
}


document.getElementById('resultado').innerText = resultado;

})