
    nome = prompt("Nome do aluno");
    nota1 = parseFloat(prompt("Nota 1"));
    nota2 = parseFloat(prompt("Nota 2"));
    nota3 = parseFloat(prompt("Nota 3"));
    var media = (nota1+nota2+nota3)/3;
    
    alert("Nome do aluno: " + nome);
    alert("Media aritmética: " + media.toFixed(2));
