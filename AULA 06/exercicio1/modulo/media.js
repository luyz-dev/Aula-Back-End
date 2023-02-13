/************************************************************************************************
 * Objetivo: Arquivo Calculo de Média
 * Autor: Luiz Gustavo
 * Data: 10/02/2023
 * Versão: 1.0
************************************************************************************************/


const calcMedia = function (notaUM, notaDois, notaTres, notaQuadro) {
    let nota1 = String(notaUM).replace(',', '.')
    let nota2 = String(notaDois).replace(',', '.')
    let nota3 = String(notaTres).replace(',', '.')
    let nota4 = String(notaQuadro).replace(',', '.')
    let status = true

    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        status = false
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        status = false
    } else if (nota1 > 100 || nota1 < 0 || nota2 > 100 || nota2 < 0 || nota3 > 100 || nota3 < 0 || nota4 > 100 || nota4 < 0) {
        status = false
    } else {
        let media
        media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
        return media
    }
    return status
}

const calcMediaExame = function (mediaDoAluno, notaDoExame) {
    let notaExame = String(notaDoExame).replace(',', '.')
    let media = String(mediaDoAluno).replace(',', '.')
    let mediaExame
    let status = true

    if (notaExame == '') {
        status = false
    } else if (notaExame < 0 || notaExame > 100) {
        status = false
    } else {
        mediaExame = (Number(media) + Number(notaExame)) / 2
        return mediaExame
    }
    return status
}

const definicaoDeSexoDoAluno = function (sexoDoAluno) {
    let definicaoAluno
    let generoDoAluno = sexoDoAluno
    let status = true

    if (generoDoAluno == '') {
        status = false
    } else if (!isNaN(generoDoAluno)) {
        status = false
    } else if (generoDoAluno != 'M' && generoDoAluno != 'F') {
        status = false
    } else if (generoDoAluno == 'M') {
        definicaoAluno = ' O aluno'
        return definicaoAluno
    } else if (generoDoAluno == 'F') {
        definicaoAluno = 'A aluna'
        return definicaoAluno
    }
    return status
}

const definicaoDeSexoDoProfessor = function (sexoDoProfessor) {
    let definicaoProfessor
    let generoDoProfessor = sexoDoProfessor
    let status = true

    if (generoDoProfessor == '') {
        status = false
    } else if (!isNaN(generoDoProfessor)) {
        status = false
    } else if (generoDoProfessor != 'M' && generoDoProfessor != 'F') {
        status = false
    } else if (generoDoProfessor == 'M') {
        definicaoProfessor = 'Professor'
        return definicaoProfessor
    } else {
        definicaoProfessor = 'Professora'
        return definicaoProfessor
    }
    return status
}

module.exports = {
    calcMedia,
    calcMediaExame,
    definicaoDeSexoDoAluno,
    definicaoDeSexoDoProfessor
}