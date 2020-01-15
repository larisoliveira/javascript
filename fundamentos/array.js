const valores = [7.7, 8.9, 6.3, 9.2]

// Imprimindo o elemento através do índice
console.log(valores[0], valores[3])
console.log(valores[4])

// Adicionando um elemento no array
valores[4] = 10
console.log(valores)

// Devolvendo quantos elementos temos no array
console.log(valores.length)

// Adicionando outros elementos através da função push
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Retira o último elemento do array e o retorna
console.log(valores.pop())
// Deleta o elemento através do seu índice
delete valores[0]
console.log(valores)

console.log(typeof valores)