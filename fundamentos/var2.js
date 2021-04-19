var numero = 1 // variáveis definidas com VAR tem escopo de função, global
{
    var numero = 2
    console.log('dentro =',numero);
}
console.log('Fora =', numero);// como var aponta p um local na memoria quando ele é alterado ele vai permanecer com o segundo valor 