//  No lado esquerdo estamos usando o operador de desestruturação e no lado direito estamos criando um array
const [a] = [10]
console.log(a)

// Abaixo temos vários elementos ao qual extraímos e adicionamos os valores nas variáveis 
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)