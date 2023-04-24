/************************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Autor: Luiz Gustavo
 * Data: 14/04/2023
 * Versão: 1.0
************************************************************************************************/

/**********************************************************
* Métodos com inicio 'ctl' são funcões do controller
* e
* Métodos com inicio 'mdl' são funcões do model
**********************************************************/

//Import do arquivo DAO para acessar dados do aluno no BD
let alunoDao = require('../model/DAO/alunoDAO.js')

//Insere um novo aluno
const ctlInserirAluno = (dadosAluno) => {

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
    let dadosAlunoJSON = {}
    let idAluno = id
    let dadosAluno = await alunoDao.mdlSelectByIdAluno(id)

    if (dadosAluno == null || dadosAluno == undefined || dadosAluno == false) {
        return false
    } else {
        dadosAlunoJSON = {
            aluno: dadosAluno
        }
        return dadosAlunoJSON
    }
    // "select * from tbl_aluno where email like '${name}%'"
}

module.exports = {
    ctlGetAlunos,
    ctlGetBuscarAlunosID
}