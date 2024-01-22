/* Resumo:
   Uma matriz, ou array, é uma estrutura de dados que armazena uma coleção de elementos. Cada elemento é um valor de um determinado tipo de dados e pode ser acessado pelo seu índice na matriz.
   Podemos criar uma matriz usando colchetes `[]` e separando os elementos com vírgulas.
   Os elementos da matriz podem ser acessados por meio de seus índices, que vão de 0 a n-1, onde n é o número de elementos na matriz.*/

// Arrays
const paises = ['Brasil', 'Argentina', "Alemanha",] // lista de dados

// Acessando uma posição do array
console.log(paises[0]) // índice entre parênteses (começa do 0...)

console.log(paises.length) // tamanho do array (começa do 1...)

// Concatenar
console.log("Acessando o país:" + paises[1])
console.log("Tamanho do array:", paises.length)

// Adicionar ou remover array
paises.push("USA") // Adiciona o elemento no final do array
paises.pop() // Remove o último elemento
paises.unshift("França") // Adiciona o elemento no início do array
paises.shift() // Remove o primeiro elemento

console.log(paises)