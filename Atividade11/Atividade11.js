// usando função construtora

let base = parseFloat(prompt ("Digite a medida da base"));
let altura = parseFloat(prompt("Digite a medida da altura"));


function Retangulo(x,y)
{
    this.x = x;
    this.y = y;

    this.CalcArea = function()
    {
        return this.x * this.y;
    }
}

var retangulo = new Retangulo(base, altura);
alert(retangulo.CalcArea());
