// No caso abaixo, a variável let possui escopo de bloco e também digamos que uma "memória", onde será possível ela lembrar do valor de "i" no que busco ao chamar a função

// Aqui é aplicado o conceito de closure = é quando uma função tem consciência do local onde foi definida 

const funcs = []

for (let i = 3; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2]()
funcs[8]()