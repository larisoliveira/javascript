const escola = "Cod3r"

// Pegando um determinado caracter na string
console.log(escola.charAt(4))
console.log(escola.charAt(5))

// Pegando o código de um determinado caracter através do CodeAt
console.log(escola.charCodeAt(3))

// Retornando o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente
console.log(escola.indexOf('3'))
console.log(escola.indexOf('o'))

// Devolvendo como resultado os catacteres a partir do índice 1 até o índice final
console.log(escola.substring(1))

// Devolvendo como resultado os catacteres a partir do índice 0 até o índice 3 sem incluir o índice 3
console.log(escola.substring(0, 3))

// Concatendando o conteúdo
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola boa demais essa ' + escola + '!')

// Substituindo o elemento do índice 3 pela letra "e"
console.log(escola.replace(3, 'e'))

// Substituindo todos os digitos dentro do texto pela letra "e" (utilizando "regular expression" ou "regex")
console.log(escola.replace(/\w/g, 'e'))

// Separando o meu array através de vírgulas
console.log('Ana, Maria, Pedro'.split(','))

// Realizando a mesma função que a setença acima porém utilizando "regular expression" ou "regex"
console.log('Ana, Maria, Pedro'.split(/,/))