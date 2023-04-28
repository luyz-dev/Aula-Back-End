/************************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Autor: Luiz Gustavo
 * Data: 28/04/2023
 * Versão: 1.0
************************************************************************************************/

/**********************************************************
* Métodos com inicio 'ctl' são funcões do controller
* e
* Métodos com inicio 'mdl' são funcões do model
**********************************************************/

var message = require('./modulo/config.js')

//Import do arquivo DAO para acessar dados do aluno no BD
let alunoDao = require('../model/DAO/alunoDAO.js')

//Insere um novo aluno
const ctlInserirAluno = async (dadosAluno) => {    
    if(
        dadosAluno.nome == ''               || dadosAluno.nome == undefined             || dadosAluno.nome.length > 100             ||
        dadosAluno.rg == ''                 || dadosAluno.rg == undefined               || dadosAluno.rg.length > 15                ||
        dadosAluno.cpf == ''                || dadosAluno.cpf == undefined              || dadosAluno.cpf.length > 18               ||
        dadosAluno.data_nascimento == ''    || dadosAluno.data_nascimento == undefined  || dadosAluno.data_nascimento.length > 10   ||
        dadosAluno.email == ''              || dadosAluno.email == undefined            || dadosAluno.email.length > 200
    ){
        return message.ERROR_REQUIRE_FIELDS
    }else{
        //Envia os dados para a model inserir no BD
        let resultDadosAlunos = await alunoDao.mdlInsertAluno(dadosAluno)

        //Valida se o BD inseriu corretamente
        if(resultDadosAlunos){
            return message.SUCCESS_CREATED_ITEM
        }else{
            return message.ERROR_INTERNAL_SERVER
        }
    }
}

//Insere um novo aluno
const ctlAtuzalizarAluno = (dadosAluno) => {

}

//Exclui um aluno existente
const ctlExcluirAluno = (id) => {

}

//Retorna a lista de todos os alunos
const ctlGetAlunos = async () => {
    let dadosAlunoJSON = {}

    //Chama a função do arquivo DAO que irá retornar todos os resgistros do DB
    let dadosAluno = await alunoDao.mdlSelectAllAluno()

    if (dadosAluno) {
        dadosAlunoJSON = {
            quantidade: dadosAluno.length,
            alunos: dadosAluno
        }
        return dadosAlunoJSON
    } else {
        return false
    }
}

//Retorna o aluno pelo id
const ctlGetBuscarAlunosID = async (id) => {

    if (id == null || id == undefined || id == '') {
        return message.ERROR_REQUIRE_FIELDS
    } else {
        let dadosAluno = await alunoDao.mdlSelectByIdAluno(id)
        if(dadosAluno){
            return {dadosAluno}
        }else{
            return false
        }
    }
}

//Retorna o aluno pelo id
const ctlGetBuscarAlunoNome = async (nome) => {
    let dadosAluno = await alunoDao.mdlSelectByNomeAluno(nome)

    if (nome == null || nome == undefined || nome == '') {
        return message.ERROR_REQUIRE_FIELDS
    } else {
        if(dadosAluno){
            return {dadosAluno}
        }else{
            return false
        }
        
    }
}

module.exports = {
    ctlGetAlunos,
    ctlGetBuscarAlunosID,
    ctlGetBuscarAlunoNome,
    ctlInserirAluno
}