// novo recuso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

// Basicamente, o que eu estou fazendo na linha de baixo é retirar do objeto pessoa os atributos nome e idade
// Observação importante: não estou atribuindo, mas sim extraindo
const { nome, idade } = pessoa
console.log(nome, idade)

// Abaixo estou criando uma variável ao meu atributo do objeto pessoa
const { nome: n, idade: i} = pessoa
console.log(n, i)

// Colocando um valor que não existe e outro que não existe também, porém com um valor adicionado
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

// Abaixo extraindo do atributo endereço outros atributos também presentes no objeto e um que não está presente (cep)
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// Tentando acessar algo que não existe
const { conta: { ag, num } } = pessoa
console.log(ag, num)

