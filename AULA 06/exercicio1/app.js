/************************************************************************************************
 * Objetivo: Média de Universidade
 * Autor: Luiz Gustavo
 * Data: 10/02/2023
 * Versão: 1.0
************************************************************************************************/

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('************* Média Dos Alunos *****************')
entradaDados.question('Digite o nome do aluno: \n', function(nomeDoAluno){
    let nomeAluno = nomeDoAluno
    
    entradaDados.question('Digite o nome do professor: \n', function(nomeDoProfessor){
        let nomeProfessor = nomeDoProfessor

        entradaDados.question('Digite o sexo do Aluno: \n F = Feminino \n M = Masculino', function(sexoDoAluno){
            let sexoAluno = sexoDoAluno.toUpperCase

            entradaDados.question('Digite o sexo do Professor: \n F = Feminino \n M = Masculino', function(sexoDoProfessor){
                let sexoProfessor = sexoDoProfessor.toUpperCase

                entradaDados.question('Digite o nome do curso: \n', function(nomeDoCurso){
                    let nomeCurso = nomeDoCurso

                    entradaDados.question('Digite a primeira nota do aluno: \n', function(valor1){
                        let nota1 = valor1.replace(',','.')

                        entradaDados.question('Digite a primeira nota do aluno: \n', function(valor1){
                            let nota2 = valor2.replace(',','.')
    
                            entradaDados.question('Digite a primeira nota do aluno: \n', function(valor1){
                                let nota3 = valor3.replace(',','.')
        
                                entradaDados.question('Digite a primeira nota do aluno: \n', function(valor1){
                                    let nota4 = valor4.replace(',','.')
            
                                    if(nomeAluno == ''){
                                        console.log('ERRO: NÃO FOI DIGITADO O NOME DO ALUNO')
                                        entradaDados.close()
                                    }else if(!isNaN(nomeAluno)){
                                        console.log('ERRO: NOME DO ALUNO FOI DIGITADO COM NÚMERO')
                                        entradaDados.close()
                                    }else if(nomeProfessor == ''){
                                        console.log('ERRO: NÃO FOI DIGITADO O NOME DO PROFESSOR')
                                        entradaDados.close()
                                    }else if(!isNaN(nomeProfessor)){
                                        console.log('ERRO: NOME DO PROFESSOR FOI DIGITADO COM NÚMERO')
                                        entradaDados.close()
                                    }else if(nomeCurso == ''){
                                        console.log('ERRO: NÃO FOI DIGITADO O NOME DO CURSO')
                                        entradaDados.close()
                                    }else if(!isNaN(nomeCurso)){
                                        console.log('ERRO: NOME DO CURSO FOI DIGITADO COM NÚMERO')
                                        entradaDados.close()
                                    }else if(sexoAluno = ''){
                                        console.log('ERRO: NÃO FOI DIGITADO O SEXO DO ALUNO')
                                        entradaDados.close()
                                    }else if(!isNaN(sexoAluno)){
                                        console.log('ERRO: SEXO DO ALUNO FOI DIGITADO COM NÚMERO')
                                        entradaDados.close()
                                    }else if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                                        console.log('ERRO: ALGUMA NOTA NÃO FOI DIGITADA')
                                        entradaDados.close()
                                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ){
                                        console.log('ERRO: ALGUM ELEMENTO QUE NÃO É NÚMERO FOI DIGITADO')
                                    }
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})