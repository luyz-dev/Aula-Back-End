/************************************************************************************************
 * Objetivo: Responsável pea manipulação de dados dos ALUNOS no Banco de Dados
 * Autor: Luiz Gustavo
 * Data: 28/04/2023
 * Versão: 1.0
************************************************************************************************/

/**
    //$queryRawUnsafe( ) -> Permite interpretar uma variavel como sendo um scriptSQL
    //$queryRaw( ) -> Esse executa o comando dentro de aspas e não podendo interpretar uma variavel


 */

//Import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client')

//Instancia da Classe PrismaClient 
var prisma = new PrismaClient()

//Inserir dados deo aluno no Banco de Dados
const mdlInsertAluno = async (dadosAluno) => {
    let sql = `insert into tbl_aluno(
        nome, 
        rg, 
        cpf, 
        data_nascimento, 
        email
    ) values (
        '${dadosAluno.nome}', 
        '${dadosAluno.rg}', 
        '${dadosAluno.cpf}', 
        '${dadosAluno.data_nascimento}',
        '${dadosAluno.email}'
    )`

    //Executa o scriptSQL no BD
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus){
        return true
    }else{
        return false
    }
}

//Atualizar dados do aluno no Banco de Dados
const mdlUpdateAluno = async (dadosAluno) => {
    let sql = `update tbl_aluno set 
            nome = '${dadosAluno.nome}',
            rg = '${dadosAluno.rg}',
            cpf = '${dadosAluno.cpf}',
            data_nascimento = '${dadosAluno.data_nascimento}',
            email = '${dadosAluno.email}'
        where id = ${dadosAluno.id}
    `

    //Executa o scriptSQL no BD
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus){
        return true
    }else{
        return false
    }
}

//Deletar dados do aluno no Banco de Dados
const mdlDeleteAluno = async (idALuno) => {
    let sql = `delete from tbl_aluno where id = ${idALuno}`

    let resultStatus = await prisma.$queryRawUnsafe(sql)
    
    if(resultStatus){
        return true
    }else{
        return false
    }
}

//Retorna todos os alunos do Banco de Dados
const mdlSelectAllAluno = async () => {
    let sql = 'select * from tbl_aluno'

    //$queryRawUnsafe( ) -> Permite interpretar uma variavel como sendo um scriptSQL
    //$queryRaw( ) -> Esse executa o comando dentro de aspas e não podendo interpretar uma variavel
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0){
        return rsAluno
    }else{
        return false
    }
}

//Inserir dados do aluno no Banco de Dados
const mdlSelectByIdAluno = async (id) => {
    let sql = `select * from tbl_aluno where id = ${id}`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0){
        return rsAluno
    }else{
        return false
    }
}

//Inserir dados do aluno no Banco de Dados
const mdlSelectByNomeAluno = async (nome) => {
    let sql = `select * from tbl_aluno where nome like '%${nome}%'`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0){
        return rsAluno
    }else{
        return false
    }
}

//Retorno o id inserido no banco de dados
const mdlSelectLastByID = async () => {
    let sql = `select * from tbl_aluno order by id desc limit 1;`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0){
        return rsAluno
    }else{
        return false
    }
}

module.exports = {
    mdlSelectAllAluno,
    mdlSelectByIdAluno,
    mdlSelectByNomeAluno,
    mdlInsertAluno,
    mdlUpdateAluno,
    mdlDeleteAluno,
    mdlSelectLastByID
}