
num1 = parseFloat(prompt("Digite o primeiro número: "));
num2 = parseFloat(prompt("Digite o segundo número: "));
num3 = parseFloat(prompt("Digite o terceiro número: "));


if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}

if (num2 > num3) {
    temp = num2;
    num2 = num3;
    num3 = temp;
}

if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}

alert("Primeiro número: " + num1 + " Segundo número: " + num2 + " Terceiro número: " + num3);  