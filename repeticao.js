/* Resumo:
   A estrutura de repetição é uma construção de código que permite executar um bloco de instruções repetidamente enquanto uma condição especificada for verdadeira. Existem diferentes tipos de estruturas de repetição, incluindo for, while, do-while, for-in e for-of. Cada tipo tem suas próprias características e é adequado para situações específicas. As estruturas de repetição são úteis quando se deseja executar um bloco de código várias vezes, como em laços de iteração em arrays ou objetos, ou em laços infinitos com condições específicas.

   Estrutura for: é uma estrutura de repetição que define um contador que começa em um valor inicial e aumenta em uma unidade a cada vez que o loop é executado. O loop continua enquanto a condição especificada for verdadeira.

   Estrutura while: é uma estrutura de repetição que define uma condição para a execução do loop. Enquanto a condição for verdadeira, o loop será executado repetidamente.

   Estrutura do-while: é semelhante à estrutura while, exceto que a condição é verificada após a execução do bloco de código, em vez de antes. Isso significa que o bloco de código será executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.

   Estrutura for-in: é usada para iterar sobre as propriedades de um objeto. 

   Estrutura for-of: é usada para iterar sobre valores de arrays ou strings.*/


// Repetição por array

const cidades = [ 'São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife'] // cidades [0], cidades [1]

/* array.forEach(element => { 
 }); */

/*cidades.forEach(cidade => {
    console.log(cidade)
})*/

/*cidades.forEach((cidade, indice) => {
    console.log('cidade: ' + indice)
    console.log(cidade)
})*/

/*cidades.forEach((cidade, indece) => {
   console.log('Execução numero: ' + indice)
   console.log(cidades)
})*/

// For normal
/* for (let index = 0; index < 10; index++) {
}*/

/*for (let indice = 0; indice < 10; indice++) {
    console.log(indice)
}*/

for (let indice = 0; indice < cidades.length; indice++) {
    console.log(cidades[indice])
}
    
