/* Exercício 1 - Estrutura de repetição

Percorrer uma lista de nomes, contendo os nomes: Eduardo, Maria , Fernando, João e Francisco
Número da execução, começando em 1
Nome que está sendo executado
Separadores
Ex:
Execução: 1
Nome: Silvia
------------*/

const nomes = ['Silvia', 'Jean', 'Augusta', 'Rosa', 'Elizabeth']
nomes.forEach((nome, indice) => {
    console.log('Execução: ', indice + 1)
    console.log('Nome: ' + nome)
    console.log('-----------------')
        
})


