// Atribuindo valor
const a = 7
let b = 3

b += a // b = b + a
console.log(b)

b -= 4 // b = b - 4
console.log(b)

b *= 2 // b = b * 2
console.log(b)

b /= 2 // b = b / 2
console.log(b)

b %= 2 // b = b % 2
console.log(b)

// No exeplo acima a varíavel "b" sofreu uma mudança de valor, por isso foi declarada como let, pois em todas as setenças ela sofreu alteração. No primeiro exemplo ela ficou com o valor de 10 e foi sofrendo alterações em cada linha e levando esse valor para as demais linhas. A variável "a" ficou como const porque o seu valor não sofre alteração