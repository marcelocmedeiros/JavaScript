const saudacao = 'opa'

function exec() {
    const saudacao = 'Falaaa'
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Marcelo',
    idade: 42,
    peso: 76,
    endereco: {rua: 'Muito Legal', num: 23}
}
console.log(saudacao);
console.log(exec());
console.log(cliente);