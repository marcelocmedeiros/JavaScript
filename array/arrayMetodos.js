const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // com var const não se pode adicionar elementos ao número inicial do tamanho do array
pilotos.pop() // exclui o último elemento
console.log(pilotos)

pilotos.push('Verstappen') // adciona um elemento ns lista
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona no primeiro elementos
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array parte do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)