const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 3000
prod1['Desconto legal'] = 0.40 // evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 60,
    obj: {
        blabla: 1,
        obj:{
            blabla:2
        }
    }
}
console.log(prod2);