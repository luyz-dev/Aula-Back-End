/************************************************************************************************
 * Objetivo: Responsável pea manipulação de dados dos ALUNOS no Banco de Dados
 * Autor: Luiz Gustavo
 * Data: 14/04/2023
 * Versão: 1.0
************************************************************************************************/

//Import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client')

//Instancia da Classe PrismaClient 
var prisma = new PrismaClient()

//Inserir dados deo alino no Banco de Dados
const mdlInsertAluno = (dadosAluno) => {
    
}

//Atualizar dados do aluno no Banco de Dados
const mdlUpdateAluno = (dadosAluno) => {
    
}

//Deletar dados do aluno no Banco de Dados
const mdlDeleteAluno = (id) => {
    
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

module.exports = {
    mdlSelectAllAluno,
    mdlSelectByIdAluno
}