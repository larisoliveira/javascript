// Var tem dois escopos possíveis > global ou no escopo de função

// A variável var estará visível mesmo fora do bloco (global)
{
    {
        {
            { var sera = 'Será???' }
        }
    }
}

console.log(sera)


// A variável var estará visível apenas dentro do bloco da função (escopo de função)
function teste() {
    var local = 123
}

// As setenças abaixo não funcionam
console.log(local)
teste()