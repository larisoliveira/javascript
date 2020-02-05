// Elevação ou JavaScript hoisting. Elevação é nada mais, nada menos do que trazer para o início do escopo a declaração de variáveis e funções.

console.log('a =', a)
var a = 2
console.log('a =', a)

// O exemplo acima é o mesmo que:
//var a //(acabamos de declarar a variável e ela está undefined)
//console.log('a =', a) //(estamos imprimindo o valor acima)
//var a = 2 //(acabou de receber um valor)
//console.log('a =', a) //(retorna o valor dado para a variável acima)

// Com a variável let isso não ocorre, vejo o exemplo abaixo:
console.log('a =', a)
let a = 2
console.log('a =', a)