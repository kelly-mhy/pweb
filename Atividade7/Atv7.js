
escolhausuario = parseInt(prompt("Digite 1- Pedra / 2-Tesoura / 3-Papel"));

result = Math.floor(((Math.random() * 3) + 1));

alert("Escolha automática " + result);

if (escolhausuario == 1) {
    if (result == 2) {
        alert("Pedra quebra tesoura");
    } else if (result == 3) {
        alert("Papel envolve pedra");
    } else if (result == 1) {
        alert("Empate");
    }
}
else if (escolhausuario == 2) {
    if (result == 1) {
        alert("Pedra quebra tesoura");
    } else if (result == 3) {
        alert("Tesoura corta papel");
    } else if (result == 2) {
        alert("Empate");
    }
}

else if (escolhausuario == 3) {
    if (result == 1) {
        alert("Papel envolve pedra");
    } else if (result == 2) {
        alert("Tesoura corta papel");
    } else if (result == 3) {
        alert("Empate");
    }
}

