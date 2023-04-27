
// usando Object
var aluno1 = new Object();
    aluno1.ra = "00001234";
    aluno1.nome = "Simão Pedro";
    alert("ra= " + aluno1.ra + " nome= " + aluno1.nome);


// usando {}
var aluno2 = {};
aluno2.ra = "1234";
aluno2.nome = "Kelly";
alert("ra= " + aluno2.ra + " nome= " + aluno2.nome);


// usando literal
var aluno3 = {
    ra: "1234567",
    nome: "Henrique"
};
alert("ra= " + aluno3.ra + " nome= " + aluno3.nome);


// usando função construtora
function Aluno(ra, nome)
{
    this.ra = ra;
    this.nome = nome;

    this.MostraDados = function()
    {
        return "ra= " + this.ra + " nome= " + this.nome;
    }
}

var aluno4 = new Aluno("123", "Lucas");
alert(aluno4.MostraDados());
// Pode só mostrar o nome assim:
alert(aluno4.nome);

var aluno5 = {};
var nome_propriedade = "ra";
aluno5[nome_propriedade] = "123";
aluno5['nome'] = "Vitor";
alert(aluno5.ra+" " + aluno5.nome)


function Aluno2(){
    var ra;
    var nome;

    // precisa criar os métodos set e get para que possa ser visto fora
    this.setRa = function(value){
        this.ra=value;
    }
    this.getRa = function(){
        return this.ra;
    }

    this.setNome = function(value){
        this.nome=value;
    }
    this.getNome = function(){
        return this.nome;
    }
}

var aluno6 = new Aluno2();
aluno6.setNome("Larissa");
aluno6.setRa("234");

alert(aluno6.getRa() + " " + aluno6.getNome());


// Aluno 2 seria a classe
// Criando uma "filha", herança

function AlunoADS(){
        var numLab;
        this.setnumLab = function(value){
            this.numLab = value;
        }
        this.getnumLab = function(value){
            return this.numLab;
        }
}

// É uma forma que utiliza para fazer a herança, espécie de molde para dizer que é herança

AlunoADS.prototype = new Aluno2();

var aluno7 = new AlunoADS();
aluno7.setNome("Denilce");
aluno7.setRa("123");
aluno7.setnumLab(5);

alert(aluno7.getNome() + " " + aluno7.getnumLab());