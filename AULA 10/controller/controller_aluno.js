/************************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Autor: Luiz Gustavo
 * Data: 12/05/2023
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

    //Validação para tratar campos obrigatórios e quantidade de caracteres   
    if (
        dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200
    ) {
        return message.ERROR_REQUIRE_FIELDS
    } else {
        //Envia os dados para a model inserir no BD
        let resultDadosAlunos = await alunoDao.mdlInsertAluno(dadosAluno)

        //Valida se o BD inseriu corretamente
        if (resultDadosAlunos) {
            let novoAluno = await alunoDao.mdlSelectLastByID()

            let dadosAlunoJSON = {
                status: message.SUCCESS_CREATED_ITEM.status,
                message: message.SUCCESS_CREATED_ITEM.message,
                aluno: novoAluno
            }

            return dadosAlunoJSON
        } else {
            return message.ERROR_INTERNAL_SERVER
        }
    }
}

//Atualiza um aluno existente
const ctlAtuzalizarAluno = async (dadosAluno, idALuno) => {

    //Validação para tratar campos obrigatórios e quantidade de caracteres   
    if (
        dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200
    ) {
        return message.ERROR_REQUIRE_FIELDS //Status coda 400

        //Validação de ID incorreto ou não informado
    } else if (idALuno == null || idALuno == undefined || isNaN(idALuno)) {
        return message.ERROR_INVALID_ID //Status coda 400
    } else {
        //Adiciona o ID do aluno no JSON dos dados
        dadosAluno.id = idALuno

        let dadoAlunoAntigo = await alunoDao.mdlSelectByIdAluno(idALuno)

        if (dadoAlunoAntigo) {
            let resultDadosAlunos = await alunoDao.mdlUpdateAluno(dadosAluno)

            let dadoAluno = await alunoDao.mdlSelectByIdAluno(idALuno)

            //Valida se o BD inseriu corretamente
            if (resultDadosAlunos) {
                let dadosAlunoJSON = {
                    status: message.SUCCESS_UPDATED_ITEM.status, //200
                    aluno_antigo: dadoAlunoAntigo,
                    aluno_atualizado: dadoAluno
                }
                return dadosAlunoJSON
            } else {
                return message.ERROR_INTERNAL_SERVER //500
            }
        } else {
            return message.ERROR_REGISTER_NOT_FOUND // 404
        }
    }
}

//Exclui um aluno existente
const ctlExcluirAluno = async (idAluno) => {

    if (idAluno == null || idAluno == undefined || idAluno == '' || isNaN(idAluno)) {
        return message.ERROR_REQUIRE_FIELDS
    } else {
        let retornoAluno = await controllerAluno.ctlGetBuscarAlunosID(idALuno)

        if (retornoAluno) {
            return message.ERROR_REGISTER_NOT_FOUND
        }else{
            let dadosAluno = await alunoDao.mdlDeleteAluno(idAluno)

            if (dadosAluno) {
                return message.SUCCESS_DELETED_ITEM
            } else {
                return message.ERROR_INTERNAL_SERVER
            }
        }
    }
}

//Retorna a lista de todos os alunos
const ctlGetAlunos = async () => {
    let dadosAlunoJSON = {}

    //Chama a função do arquivo DAO que irá retornar todos os resgistros do DB
    let dadosAluno = await alunoDao.mdlSelectAllAluno()

    if (dadosAluno) {
        dadosAlunoJSON = {
            status: message.SUCCESS_REQUEST.status,
            message: message.SUCCESS_REQUEST.message,
            quantidade: dadosAluno.length,
            alunos: dadosAluno
        }
        return dadosAlunoJSON
    } else {
        return message.ERROR_REGISTER_NOT_FOUND
    }
}

//Retorna o aluno pelo id
const ctlGetBuscarAlunosID = async (id) => {
    let dadosAlunoJSON = {}

    if (id == null || id == undefined || id == '') {
        return message.ERROR_INVALID_ID
    } else {
        let dadosAluno = await alunoDao.mdlSelectByIdAluno(id)

        if (dadosAluno) {

            dadosAlunoJSON = {
                status: message.SUCCESS_REQUEST.status,
                message: message.SUCCESS_REQUEST.message,
                alunos: dadosAluno
            }

            return dadosAlunoJSON
        } else {
            return message.ERROR_REGISTER_NOT_FOUND
        }
    }
}

//Retorna o aluno pelo id
const ctlGetBuscarAlunoNome = async (nome) => {
    let dadosAlunoJSON = {}
    let dadosAluno = await alunoDao.mdlSelectByNomeAluno(nome)

    if (nome == null || nome == undefined || nome == '') {
        return message.ERROR_REQUIRE_FIELDS
    } else {
        if (dadosAluno) {
            dadosAlunoJSON = {
                status: message.SUCCESS_REQUEST.status,
                message: message.SUCCESS_REQUEST.message,
                alunos: dadosAluno
            }
            return dadosAlunoJSON
        } else {
            return message.ERROR_INVALID_NOME
        }
    }
}

module.exports = {
    ctlGetAlunos,
    ctlGetBuscarAlunosID,
    ctlGetBuscarAlunoNome,
    ctlInserirAluno,
    ctlAtuzalizarAluno,
    ctlExcluirAluno
}