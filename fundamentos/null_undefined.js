const a = {name: 'teste'}

const b  = a
console.log(b);

b.name = 'opa'
console.log(a);
// tanto a como b apontam par ao mesmo espaço de memoria 
// atribuição por referência
let c = 3
let d = c
d++
console.log(d);
console.log(c); 
// quando se trabalha com tipo primitivos é passado uma copia por valor