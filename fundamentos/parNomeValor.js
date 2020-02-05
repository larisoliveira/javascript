// par nome/valor
const saudacao = 'Opa' // contexto léxico = é o local físico onde a sua váriavel foi declarada

function exec() {
  const saudacao = 'Falaaa'
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor (chave e valor)
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua muito legal",
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

// Nos exemplos acima podemos ver que os valores foram definidos em contextos léxicos diferentes e por isso os valores retornados serão diferentes

// No caso da função "exec()", caso não houvesse a declaração da variável dentro da função, ela iria procurar em um contexto léxico diferente o valor. Com o exemplo acima, o valor seria "Opa"