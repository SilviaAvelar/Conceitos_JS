/* Resumo:
   Uma variável é uma área de armazenamento temporário na memória do computador onde você pode armazenar um valor de um determinado tipo. O tipo de valor que uma variável pode armazenar é chamado de tipo de dados.
   Podemos declarar variáveis usando as palavras-chave var, let e const. Essas palavras-chave indicam que a variável será usada em diferentes contextos, como funções locais ou variáveis globais.*/

// Var - Pode ser alterada! O valor têm de estar entre ""
var nome = 'Silvia' // string - texto
nome = 'Cristina'
console.log(nome)

// Let - Pode ser alterada!
let idade = 20 // números
idade = 30
console.log(idade)

// Const - NÃO pode ser alterada!
const cidade = 'Florianópolis'

var maior_idade = false // boolean - verdadeiro ou falso

// Arrays []
const paises = ['Brasil', 'Argentina', 'Alemanha',] // lista de dados

// Objeto : { } valor
let devices = {
    nome: 'iPhone 14',
    preço: 8000,
    cores: {
        cor1: 'vermelho',
        cor2: 'azul'
    }
}

console.log(devices)
// função