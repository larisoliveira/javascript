// O let, diferente do var, possui o escopo de bloco, então o seu valor é apenas válido para o escopo no qual ele está inserido

let numero = 1 
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)