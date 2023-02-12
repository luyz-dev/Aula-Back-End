/************************************************************************************************
 * Objetivo: Média de Universidade
 * Autor: Luiz Gustavo
 * Data: 10/02/2023
 * Versão: 1.0
************************************************************************************************/

var readline = require('readline')
const media = require('./modulo/media.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('************* Média Dos Alunos *****************')
entradaDados.question('Digite o nome do aluno: \n', function (nomeDoAluno) {
    let nomeAluno = nomeDoAluno

    if (nomeAluno == '') {
        console.log('ERRO: NÃO FOI DIGITADO O NOME DO ALUNO')
        entradaDados.close()
    } else if (!isNaN(nomeAluno)) {
        console.log('ERRO: NOME DO ALUNO FOI DIGITADO COM NÚMERO')
        entradaDados.close()
    } else {
        entradaDados.question('Digite o sexo do Aluno: \n F = Feminino \n M = Masculino \n', function (sexoDoAluno) {
            let sexoAluno = sexoDoAluno.toUpperCase()
            if (sexoAluno == '') {
                console.log('ERRO: NÃO FOI DIGITADO O SEXO DO ALUNO')
                entradaDados.close()
            } else if (!isNaN(sexoAluno)) {
                console.log('ERRO: SEXO DO ALUNO FOI DIGITADO COM NÚMERO')
                entradaDados.close()
            } else if (sexoAluno != 'M' && sexoAluno != 'F') {
                console.log('ERRO: NÃO FOI DIGITADO UMA LETRA DE SEXO VÁLIDO PARA O ALUNO')
                entradaDados.close()
            } else {
                let nomeDefinidoAluno = media.definicaoDeSexoDoAluno(sexoAluno)

                entradaDados.question('Digite o nome do professor: \n', function (nomeDoProfessor) {
                    let nomeProfessor = nomeDoProfessor

                    if (nomeProfessor == '') {
                        console.log('ERRO: NÃO FOI DIGITADO O NOME DO PROFESSOR')
                        entradaDados.close()
                    } else if (!isNaN(nomeProfessor)) {
                        console.log('ERRO: NOME DO PROFESSOR FOI DIGITADO COM NÚMERO')
                        entradaDados.close()
                    } else {
                        entradaDados.question('Digite o sexo do Professor: \n F = Feminino \n M = Masculino \n', function (sexoDoProfessor) {
                            let sexoProfessor = sexoDoProfessor.toUpperCase()
                            if (sexoProfessor == '') {
                                console.log('ERRO: NÃO FOI DIGITADO O SEXO DO PROFESSOR')
                                entradaDados.close()
                            } else if (!isNaN(sexoProfessor)) {
                                console.log('ERRO: SEXO DO PROFESSOR FOI DIGITADO COM NÚMERO')
                                entradaDados.close()
                            } else if (sexoProfessor != 'M' && sexoProfessor != 'F') {
                                console.log('ERRO: NÃO FOI DIGITADO UMA LETRA DE SEXO VÁLIDO PARA O PROFESSOR')
                                entradaDados.close()
                            } else {
                                let nomeDefinidoProfessor = media.definicaoDeSexoDoProfessor(sexoProfessor)

                                entradaDados.question('Digite o nome da disciplina: \n', function (nomeDaDisciplina) {
                                    let nomeDisciplina = nomeDaDisciplina

                                    if (nomeDisciplina == '') {
                                        console.log('ERRO: NÃO FOI DIGITADO O NOME DA DISCIPLINA')
                                        entradaDados.close()
                                    } else {
                                        entradaDados.question('Digite o nome do curso: \n', function (nomeDoCurso) {
                                            let nomeCurso = nomeDoCurso

                                            if (nomeCurso == '') {
                                                console.log('ERRO: NÃO FOI DIGITADO O NOME DO CURSO')
                                                entradaDados.close()
                                            } else if (!isNaN(nomeCurso)) {
                                                console.log('ERRO: NOME DO CURSO FOI DIGITADO COM NÚMERO')
                                                entradaDados.close()
                                            } else {
                                                entradaDados.question('Digite a primeira nota do aluno: \n', function (valor1) {
                                                    let nota1 = valor1.replace(',', '.')

                                                    entradaDados.question('Digite a segunda nota do aluno: \n', function (valor2) {
                                                        let nota2 = valor2.replace(',', '.')

                                                        entradaDados.question('Digite a terceira nota do aluno: \n', function (valor3) {
                                                            let nota3 = valor3.replace(',', '.')

                                                            entradaDados.question('Digite a quarta nota do aluno: \n', function (valor4) {
                                                                let nota4 = valor4.replace(',', '.')

                                                                if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                                                                    console.log('ERRO: ALGUMA NOTA NÃO FOI DIGITADA')
                                                                    entradaDados.close()
                                                                } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                                                    console.log('ERRO: ALGUM ELEMENTO QUE NÃO É NÚMERO FOI DIGITADO')
                                                                } else {
                                                                    let mediaAluno = Number()
                                                                    let statusAluno
                                                                    mediaAluno = media.calcMedia(nota1, nota2, nota3, nota4)
                                                                    if (mediaAluno < 50) {
                                                                        statusAluno = ('REPROVADO')
                                                                        console.log('********************* RELÁTORIO DO ALUNO *********************')
                                                                        console.log(`${nomeDefinidoAluno} ${nomeAluno} foi ${statusAluno} na disciplina ${nomeDisciplina}. \n` +
                                                                            `Curso: ${nomeCurso} \n` +
                                                                            `${nomeDefinidoProfessor}: ${nomeProfessor} \n` +
                                                                            `Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4} \n` +
                                                                            `Média Final: ${mediaAluno}`)
                                                                        console.log('**************************************************************')
                                                                        entradaDados.close()
                                                                    } else if (mediaAluno >= 70) {
                                                                        statusAluno = ('APROVADO')
                                                                        console.log('********************* RELÁTORIO DO ALUNO *********************')
                                                                        console.log(`O ${nomeDefinidoAluno} ${nomeAluno} foi ${statusAluno} na disciplina ${nomeDisciplina}. \n` +
                                                                            `Curso: ${nomeCurso} \n` +
                                                                            `${nomeDefinidoProfessor}: ${nomeProfessor} \n` +
                                                                            `Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4} \n` +
                                                                            `Média Final: ${mediaAluno}`)
                                                                        console.log('**************************************************************')
                                                                        entradaDados.close()
                                                                    } else {
                                                                        entradaDados.question('DE EXAME, Digite a nota do exame: \n', function (notaDoExame) {
                                                                            let mediaExame
                                                                            let notaExame = notaDoExame.replace(',', '.')
                                                                            mediaExame = media.calcMediaExame(mediaAluno, notaExame)
                                                                            if (mediaExame > 60) {
                                                                                statusAluno = (' APROVADO ')
                                                                                console.log('********************* RELÁTORIO DO ALUNO *********************')
                                                                                console.log(`O ${nomeDefinidoAluno} ${nomeAluno} foi ${statusAluno} na disciplina ${nomeDisciplina}. \n` +
                                                                                    `Curso: ${nomeCurso} \n` +
                                                                                    `${nomeDefinidoProfessor}: ${nomeProfessor} \n` +
                                                                                    `Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame} \n` +
                                                                                    `Média Final com Exame: ${mediaExame}`)
                                                                                console.log('**************************************************************')
                                                                                entradaDados.close()
                                                                            } else {
                                                                                statusAluno = (' REPROVADO ')
                                                                                console.log('********************* RELÁTORIO DO ALUNO *********************')
                                                                                console.log(`O ${nomeDefinidoAluno} ${nomeAluno} foi ${statusAluno} na disciplina ${nomeDisciplina}. \n` +
                                                                                    `Curso: ${nomeCurso} \n` +
                                                                                    `${nomeDefinidoProfessor}: ${nomeProfessor} \n` +
                                                                                    `Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame} \n` +
                                                                                    `Média Final com Exame: ${mediaExame}`)
                                                                                console.log('**************************************************************')
                                                                            }
                                                                        })
                                                                    }
                                                                }
                                                            })
                                                        })
                                                    })
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})

