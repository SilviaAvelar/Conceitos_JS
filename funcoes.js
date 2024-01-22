/* Resumo:
Funções: é um bloco de código reutilizável que realiza uma tarefa específica ou calcula um valor. As funções são fundamentais para a modularização e organização do código, permitindo que você divida tarefas complexas em partes menores e mais gerenciáveis.
Pode ou não receber dados
nomeDaFuncao: É o nome dado à função, permitindo chamá-la posteriormente no código. (Precisa ser chamada)
parâmetros: São variáveis que a função aceita como entrada. Podem ser opcionais ou obrigatórios.
corpo da função: É o conjunto de instruções executadas quando a função é chamada.
return: Palavra-chave usada para retornar um valor da função. Se não houver a palavra-chave 'return', a função retornará undefined.*/

/*function gerarNome() {
    const nome = 'Silvia'
    const sobrenome = ' Avelar'
    const idade = 30
    console.log('Nome: ', nome + sobrenome)
    console.log('Idade: ', idade)
}
gerarNome()*/

// Passar e receber parâmetros://
/*function gerarNome (nome, sobrenome, idade) {
    console.log('Nome: ', nome + sobrenome)
    console.log('Idade: ', idade)
}
gerarNome('Cristina', ' de Oliveira', 45)
gerarNome('Jean', ' Pereira', 38)*/

// Funções que retornan dados: //
function gerarNome (nome, sobrenome) {
    return 'Nome: ' + nome + sobrenome
}

//console.log(gerarNome('Cristina', ' de Oliveira'))//

const nomeGerado = gerarNome('Silvia', ' Avelar') // outra forma de chamar
console.log(nomeGerado)
