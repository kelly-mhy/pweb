
a = parseFloat(prompt("Digite o primeiro número: "));
b = parseFloat(prompt("Digite o segundo número: "));
c = parseFloat(prompt("Digite o terceiro número: "));


function maior(a, b, c) {
    return Math.max(a, b, c);
}

alert("O maior número é: " + maior(a, b, c)); 