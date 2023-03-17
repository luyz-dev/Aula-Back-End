/************************************************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de Estados e Cidades
 * Autor: Luiz Gustavo
 * Data: 10/03/2023
 * Versão: 1.0
************************************************************************************************/

/**
 * Express - dependencia para realizar requisições de api pelo protocolo HTTP
 *      npm install express --save 
 * 
 * Cors - dependencia para gerenciar permissões de requisições da api
 *      npm install cors --save
 * 
 * Body-Parser - dependencia que gerencia o corpo das requisições
 *      npm install body-parser --save
 **/

//Import das dependencias do projeto

//Dependências para criar as requisições da api
const express = require('express')
//Dependências  gerenciar as permissões da api
const cors = require('cors')
//Dependências  gerenciar o corpo das requisições da api
const bodyParser = require('body-parser')

//Cria um obejto com as caracteristicas do express
const app = express()

//Import do arquivo modulo (funções)
const estadosCidades = require('./modulo/cidades.js')

app.use((request, response, next) => {
    //API Publica - Fica disponivel para utilização de qualquer aplicação
    //API Privada - Somente o IP informado poderá consumir dados da api

    //Define se a api será publica ou privada
    response.header('Access-Control-Allow-Origin', '*')

    //Permite definir quais metodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()

})

//EndPoints
//async - estabelece uma mensagem e aguarde, qassim que eu processar te devolvo os dados
//Obs: se não usar o async a requisição é perdida, pois o front acha que a api está fora ar

//EndPoint para listar todos os estados
app.get('/estados', cors(), async function (request, response, next) {


    //Chama a função que vai listar todos os estados
    let estados = estadosCidades.getListaDeEstados()

    //Tratamento para validar o sucesso da requisição
    if (estados) {

        response.json(estados)
    } else {
        response.status(500)
    }
})

//EndPoint: Lista os dados do estado filtrando pela sigla do estado
app.get('/estado/sigla/:uf', cors(), async function (request, response, next) {

    let statusCode
    let dadosEstados = {}

    //Recebe uma sigla do estado que será enviada pela URL da requisição
    let siglaEstado = request.params.uf


    //Tratamento para validação de entrada de dados incorreta
    if (siglaEstado.length != 2 || siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosEstados.message = 'Não foi possivel processar os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracter e ter dois digitos'

    } else {

        let estado = estadosCidades.getDadosEstado(siglaEstado)

        if (estado) {
            statusCode = 200
            dadosEstados = estado
        } else {
            statusCode = 404
        }
    }
    //Retorna o código e o JSON
    response.status(statusCode)
    response.json(dadosEstados)
})

app.get('/capital/:uf', cors(), async function(request, response, next){
    let statusCode
    let dadoCapital = {}

    let siglaEstado = request.params.uf

    if (siglaEstado.length != 2 || siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)) {
        statusCode = 400
        dadoCapital.message = 'Não foi possivel processar os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracter e ter dois digitos'
    } else {
        let capital = estadosCidades.getCapitalEstado(siglaEstado)

        if (capital) {
            statusCode = 200
            dadoCapital = capital
        } else {
            statusCode = 404
        }
    }
    //Retorna o código e o JSON
    response.status(statusCode)
    response.json(dadoCapital)
})

app.get('/estados_regiao/:regiao', cors(), async function(request, response, next){
    
    let statusCode
    let dadosRegiao = {}

    let regiao = request.params.regiao

    if(regiao == '' || regiao == undefined || !isNaN(regiao)){
        statusCode = 400
        dadosRegiao.message = 'Não foi possivel processar os dados de entrada (regiao) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio e precisa ser caracter'
    }else{
        let estadosRegiao = estadosCidades.getEstadosRegiao(regiao)

        if(estadosRegiao){
            statusCode = 200
            dadosRegiao = estadosRegiao
        }else{
            statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosRegiao)
})

app.get('/capitais', cors(), async function(request, response, next){

    let capitais = estadosCidades.getCapitalPais()

    if (capitais) {
        response.status(200)
        response.json(capitais)
    } else {
        response.status(500)
    }

})

app.get('/v1/cidades/estados/sigla/:uf', cors(), async function(request, response, next){

    let statusCode
    let dadosCidades = {}

    let siglaEstado = request.params.uf

    if (siglaEstado.length != 2 || siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosCidades.message = 'Não foi possivel processar os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracter e ter dois digitos'
    } else {
        let cidades = estadosCidades.getCidades(siglaEstado)

        if(cidades){
            statusCode = 200
            dadosCidades = cidades
        }else{
            statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosCidades)
})

app.get('/v2-marcel/cidades', cors(), async function(request, response, next){

    /*
        Existem 2 opções para receber variáveis para filtro>
            params - que permite receber a varivel na estrutura da url
                criada no endPoint (geralmente utilizada para ID (PK))
            
            query - Tambem conhecido como query string permite receber uma ou muitas variaveis para
                realizar filtros avançados    
     */

    //Recebe uma variavel encaminhada via QuerrtString
    let siglaEstado = request.query.uf
    let statusCode
    let dadosCidades = {}

    if (siglaEstado.length != 2 || siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosCidades.message = 'Não foi possivel processar os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracter e ter dois digitos'
    } else {
        let cidades = estadosCidades.getCidades(siglaEstado)

        if(cidades){
            statusCode = 200
            dadosCidades = cidades
        }else{
            statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosCidades)

})

app.listen(8080, () => { console.log('Servidor aguardando requisição na porta 8080.') })


