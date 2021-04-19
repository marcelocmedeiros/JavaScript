let valor // não foi inicializada
console.log(valor); 

valor = null // ausência de valor
            // caso queira zerar uma variável use null
console.log(valor);

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto);

produto.preco = null
console.log(!!produto.preco)
console.log(produto)