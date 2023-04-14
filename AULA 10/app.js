/************************************************************************************************
 * Objetivo: API para integração entre Back e Banco de Dados (GET, POST, PUT, DELETE)
 * Autor: Luiz Gustavo
 * Data: 14/04/2023
 * Versão: 1.0
************************************************************************************************/

//Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { request, response } = require('express')

//Cria o objeto app conforme a classe do express
const app = express()

app.use((request, response, next) => {
    //Define quem poderá acessar a api(* - Todos)
    response.header('Acess-Control-ALlow-Origin', '*')

    //Define quais metodos serão utilizados na api
    response.header('Acess-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao cors
    app.use(cors())

    next()
})

//CRUD (Create, Read, Update e Delete)

/************************************************************************************************
 * Objetivo: API de controle de ALUNOS
 * Autor: Luiz Gustavo
 * Data: 14/04/2023
 * Versão: 1.0
************************************************************************************************/

//EndPoint: Retornar todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async, function(request, response){
    


})

//EndPoint: Retornar o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async, function(request, response){



})

//EndPoint: Insere um dado novo
app.post('/v1/lion-school/aluno', cors(), async, function(request, response){



})

//EndPoint: Atualiza um aluno existente, filtrando pelo id
app.put('/v1/lion-school/aluno/:id', cors(), async, function(request, response){



})

//EndPoint: Exclui um aluno, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async, function(request, response){



})

app.listen(8080, () => console.log('Servidor aguardando requisições na porta 8080'))
