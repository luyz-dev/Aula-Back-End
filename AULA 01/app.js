//Permite exibir no terminal uma mansagem
console.log('Hello World!!')

//Import da biblioteca que permite entrada de dados via teclado
var readline = require('readline')

//Criamos um objeto ou variavel que vai ser especialista na entrada
//de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*CallBack - Uma Função de CallBack permite que na propria linha de programação
seja uma variavel, um processamento, a chamada de um metodo possa acontecer
um retorno de dados automaticamente, sem precisar sair deste processamento
*/

/*Cria uma interação com o usuário, para entrada de dados.
Após o usuárrio digitar o conteúdo, o objeto entradaDados permite
retornar o conteúdo digitado para ser utilizado. Isso acontece através
de uma função de CallBack
*/
entradaDados.question('Favor digitar seu nome: \n', function(nome){
    console.log('Bem vindo, ' + nome + ' ao node.js')
})