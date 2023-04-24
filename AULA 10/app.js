/************************************************************************************************
 * Objetivo: API para integração entre Back e Banco de Dados (GET, POST, PUT, DELETE)
 * Autor: Luiz Gustavo
 * Data: 14/04/2023
 * Versão: 1.0
************************************************************************************************/

/**********************************************************
* Métodos com inicio 'ctl' são funcões do controller
* e
* Métodos com inicio 'mdl' são funcões do model
**********************************************************/

//Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria o objeto app conforme a classe do express
const app = express()

app.use((request, response, next) => {
    //Define quem poderá acessar a api(* - Todos)
    response.header('Acess-Control-ALlow-Origin', '*')

    //Define quais metodos serão utilizados na api
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao cors
    app.use(cors())

    next()
})

//CRUD (Create, Read, Update e Delete)

/************************************************************************************************
 * Objetivo: API de controle de ALUNOS
 * Autor: Luiz Gustavo
 * Data: 24/04/2023
 * Versão: 1.0
************************************************************************************************/

/** INSTALAÇÃO DO PRISMA NO PROJETO(biblioteca para conexão com BD)
 * npm install prisma --save
 * npx prisma
 * npx prisma init
 * npm install @prisma/client --save
 * 
 * 
 * npm prisma migrate dev       ###Serve para realizar o sincronismo entre o prisma e o BD
 */

//Import do araquivo da controler que irá solicitar a model os do BD
let controllerAluno = require('./controller/controller_aluno.js')

//EndPoint: Retornar todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

    //Recebe od dados da controller do aluno
    let dadosAluno = await controllerAluno.ctlGetAlunos()

    //Valida se existe registros de aluno
    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }
})

//EndPoint: Retornar o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
    let idAluno = request.params.id
    
    let dadosAluno = await controllerAluno.ctlGetBuscarAlunosID(idAluno)

    if (idAluno == null || idAluno == undefined || isNaN(idAluno) || dadosAluno == false || dadosAluno == undefined) {
        response.json()
        response.status(404)
    } else {
        response.json(dadosAluno)
        response.status(200)
    }
})

//EndPoint: Insere um dado novo
app.post('/v1/lion-school/aluno', cors(), async function (request, response) {



})

//EndPoint: Atualiza um aluno existente, filtrando pelo id
app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {



})

//EndPoint: Exclui um aluno, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {



})

app.listen(8080, () => console.log('Servidor aguardando requisições na porta 8080'))
