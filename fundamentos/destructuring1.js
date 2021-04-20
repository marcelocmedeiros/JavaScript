const pessoa = {
    nome: 'Ana',
    idade: 45,
    endereco: {
        rua: 'abc',
        num: 23
    }
}

const {nome, idade} = pessoa
console.log(nome, idade);

const {nome:n, idade: i} = pessoa
console.log(n, i);

const {sobrenome, bemhumorada= true} = pessoa
console.log(sobrenome, bemhumorada);

const {endereco:{rua, num, cep='5800-000'} } = pessoa
console.log(rua, num, cep)