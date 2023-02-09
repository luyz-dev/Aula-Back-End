/************************************************************************************************
 * Objetivo: Estrutura de Repetição
 * Autor: Luiz Gustavo
 * Data: 09/02/2023
 * Versão: 1.0
************************************************************************************************/

//import da biblioteca readline
var readline = require('readline')

//import da biblioteca e da tabuada(que está na minha maquina)
var matematica = require('./modulo/tabuada')
const tabuada = require('./modulo/tabuada')

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('************** Bem Vindo a Tabuada :) ********************')
entradaDados.question('Digite o multiplicando: \n', function (valor1) {
    let multiplicando = Number(String(valor1).replace(',', '.'))

    entradaDados.question('Digite o multiplicador; \n', function (valor2) {
        let multiplicador = Number(String(valor2).replace(',', '.'))
        let resultado

        if (multiplicando == 0 || multiplicador == 0) {
            console.log('ERRO: Digite um número')
        } else if (isNaN(multiplicando) || isNaN(multiplicador)) {
            console.log('ERRO: Digite um número válido')
        } else {
            resultado = tabuada.calcularTabuada(multiplicando, multiplicador)
            if (resultado == false) {
                entradaDados.close()
            } else {
                console.log(resultado)
                entradaDados.close()
            }
        }



    })
})