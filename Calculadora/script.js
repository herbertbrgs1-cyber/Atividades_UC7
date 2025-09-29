function apresentar() {
    let nome = prompt("Digite o seu nome: ")

    alert(`Olá, meu nome é ${nome}!`)

    let anoNascimento = Number(prompt("Digite o seu ano de nascimento: "))

    let idade = 2025 - anoNascimento

    alert(`Eu tenho ${idade} anos de idade.`)

    if (idade >= 18) {
        alert("Acesso Liberado!")
    } else {
        alert("Acesso Negado!")
    }
}

function calculadoraSimples() {
    let numero1 = Number(document.getElementById("numero1").value);
    let operador = document.getElementById("operador").value;
    let numero2 = Number(document.getElementById("numero2").value);
    let resultado = 0;

    if (isNaN(numero1)) {
        alert("Você digitou um número inválido para Número 1.");
        return;
    }

    if (!['+', '-', '*', '/'].includes(operador)) {
        alert("Você digitou um operador inválido!");
        return;
    }

    if (isNaN(numero2)) {
        alert("Você digitou um número inválido para Número 2.");
        return;
    }

    if (operador === "+") {
        resultado = numero1 + numero2;
    } else if (operador === "-") {
        resultado = numero1 - numero2;
    } else if (operador === "*") {
        resultado = numero1 * numero2;
    } else if (operador === "/") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            alert("Tentativa de Divisão por 0");
            return;
        }
    }

    document.getElementById("resultado").textContent = `${numero1} ${operador} ${numero2} = ${resultado}`;
}
