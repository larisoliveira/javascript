let valor // não inicializada
console.log(valor) // foi declarado, porém não inicializado
//console.log(valor2) // não foi declarado e sendo assim, não foi inicializado também
// as setenças acimas mostraram erros diferentes no console

valor = null // ausência de valor, ou seja, não aponta para nenhum objeto na memória
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
// no caso acima não vai dar erro porque a minha variável está setada com um valor, porém o que não está DEFINIDO é o preco 
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(produto)

produto.preco = null // sem preço
console.log(produto)