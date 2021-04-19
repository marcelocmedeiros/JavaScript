// Funcao sem retorno
function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(2, 3)
imprimeSoma(2)
imprimeSoma(6, 7, 8, 9)
imprimeSoma()

// Função com Retorno
function soma(a, b=0) {
    return a + b
}

console.log(soma(2, 2))
console.log(soma(2))
console.log(soma())