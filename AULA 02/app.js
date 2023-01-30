/************************************************************************************
 * Objetivo: Calcular a média de quatro notas escolares
 * Autor: Luiz Gustavo
 * Data: 30/01/2023
 * Versão: 1.1
************************************************************************************/

//import da biblioteca readline
var readline = require('readline')

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
/**
 * Criação de Variaveis
    * var - cria um espaço na memória(variável) de escopo global, 
        * uma variável que se utiliza em varias funções, utilizada em vários trechos do meu código.
    * let - cria um espaço na memória(variável) de escopo local, ou seja, 
        * essa variável só poderá ser utilizada dentro da função que foi criada.
    * const - cria um espaço na memória(variável) de escopo local ou global de valora fixo, ou seja,
        * poderá ser utilizada em qualquer parte do projeto e nunca sofrerá alteração.
 **/

//Função de CallBack para entrar o nome do aluno
entradaDados.question('Digite seu nome: \n', function(nome) {
    //Recebe o valor digitado pelo teclado e armazena em uma variavel
    let nomeAluno = nome

    //Função de CallBack para entrar a nota1
    entradaDados.question('Digite a nota1: \n', function(nota1) {
        let valor1 = nota1

        //Função de CallBack para entrar a nota2
        entradaDados.question('Digite a nota2: \n', function(nota2) {
            let valor2 = nota2

            //Função de CallBack para entrar a nota3
            entradaDados.question('Digite a nota3: \n', function(nota3) {
                let valor3 = nota3

                //Função de CallBack para entrar a nota4
                entradaDados.question('Digite a nota4: \n', function(nota4) {
                    let valor4 = nota4
                    let media

                    /*
                        Conversão de Tipos de Dados
                            parseInt() ou Number.parseInt() → converte um string para inteiro;
                            parseFloat() ou Number.parseFloat() → converte um string para real;
                            Number( ) → converte string para number, conforme a entrada do 
                                valor o JS define se será inteiro ou real. 
                        
                        Operadores de Comparação:
                            == (verifica a igualdade entre conteúdos)
                            != (verifica a diferença entre conteúdos)
                            < (menor)
                            > (maior)
                            <= (menor ou igual)
                            >= (maior ou igual)
                            === (verifica a igualdade de conteúdo e tipo de dados)
                            !== (verifica a diferença entre conteúdos e a igualdade do tipo de dados)
                            ==! (verifica a igualdade entre conteúdos e a difereça do tipo de dados)
                            !=! (verifica a diferença entre conteúdos e a difereça do tipo de dados)
                        
                        Operadores Lógicos:
                            E           &&      AND
                            OU          ||      OR
                            NEGAÇÃO     !       NOT
                     */

                    //Validação para entrada vazia
                    if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '') {
                        console.log('ERRO: Você deixou de entrar com algum valor.')
                    }else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)  || isNaN(valor4) ){
                        console.log('ERRO: Você não digitou um número em algum valor.')
                    //Validação para entrada de dados somente entre 0 e 10
                    }else if(valor1 < 0 || valor1 > 10 || valor2 < 0 || valor2 > 10 || valor3 < 0 || valor3 > 10 || valor4 < 0 || valor4 > 10){ 
                        console.log('ERRO: os valores precisam ser entre 0 e 10')
                    }else{
                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4
                    //Validação para a média de aprovação(nota maior ou igual a 7) ou reprovação(nota menor que 7)    
                        if(media < 7){
                            console.log('Status Aluno: Reprovado')
                        }else{
                            console.log('Status Aluno: Aprovado')
                        }
                        console.log('Média do Aluno: '+ media.toFixed(1))
                    }
                })
            })
        })
    })
})