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

app.use((request, response, next) =>{
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
app.get('/estados', cors(), async (request, response, next) => {
    const estadosCidades = require('./modulo/cidades.js')
    let estados = estadosCidades.getListaDeEstados()
    response.status(200)
    response.json(estados)
})

app.listen(8080, ()=>{console.log('Servidor aguardando requisição na porta 8080.')})


