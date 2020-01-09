const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Expressões...
// O que colocamos entre chaves ele irá tentar interpolar/interpretar. Nesse caso, ele irá resolver a operação entre chaves e não a que está entre a crase porque ficou no formato string.
console.log(`1 - 1 = ${1 - 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

// No exemplo acima ele pegou o meu texto "cuidado" e aplicou na minha função.
// Uma expressão é iniciada com $ e a abertura e fechamento de chaves({}); e dentro das chaves colocamos a nossa expressão