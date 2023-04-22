
/* 
---------------------------------------------------------------------------------------
QUANTIDADE DE RESPOSTAS REQUERIDAS DEFINIDA PARA 5
--> ALTERAR A VARIÁVEL "TAM" PARA QUANTIDADE DE PESQUISAS DESEJADAS
---------------------------------------------------------------------------------------
*/

let tam = 5;
let somaIdades = 0;
let maisVelha = 0;
let mediaIdades = 0;
var pessimo = 0;
var otimobom = 0;
var fem = 0;
var masc = 0;

var idade = new Array(tam);
var opiniao = new Array(tam);
var sexo = new Array(tam);

for (i = 0; i < tam; i++) {
    idade[i] = parseInt(prompt("Digite a idade: "));
    opiniao[i] = (prompt("Digite a opinião (4: Ótimo / 3: Bom / 2: Regular / 1: Péssimo: "));
    sexo[i] = (prompt("Digite sexo: "));
}

let maisNova = idade[0];

for (i = 0; i < tam; i++) {
    somaIdades += idade[i];

    if (idade[i] > maisVelha) {
        maisVelha = idade[i];
    }

    if (idade[i] < maisNova) {
        maisNova = idade[i];
    }

    if (opiniao[i] == 1) {
        pessimo += 1;
    }

    if (opiniao[i] == 3 || opiniao[i] == 4) {
        otimobom += 1;
    }

    if (sexo[i] == "F" || sexo[i] == "f") {
        fem += 1;
    }

    if (sexo[i] == "M" || sexo[i] == "m") {
        masc += 1;
    }
}

mediaIdades = somaIdades / tam;
porceOtimoBom = Math.floor((100 * otimobom) / tam);

alert("Quantidade de pessoas entrevistadas: " + tam + 
"\n Média de idade das pessoas que responderam a pesquisa: " + mediaIdades +
"\n Idade da pessoa mais velha: " + maisVelha +
"\n Idade da pessoa mais nova: " + maisNova +
"\n Quantidade de pessoas que responderam PÉSSIMO: " + pessimo + 
"\n Percentual de pessoas que responderam ÓTIMO ou BOM: " + porceOtimoBom + "%" +
"\n Número de MULHERES que responderam a pesquisa: " + fem +
"\n Número de HOMENS que responderam a pesquisa: " + masc);