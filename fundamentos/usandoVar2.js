// No caso abaixo, pelo var estar em modo global, a variável 'numero' receberá um valor novo
var numero = 1 
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)