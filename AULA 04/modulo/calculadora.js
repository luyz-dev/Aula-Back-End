/************************************************************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Autor: Luiz Gustavo
 * Data: 03/02/2023
 * Versão: 1.0
************************************************************************************************/

//Função para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
//Forma 01 de criar uma função (tradicional)
function calculadora(numero1, numero2, tipoCalculo) {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado
    let status = true

    // if (operacao == 'SOMAR') {
    //     resultado = valor1 + valor2
    // } else if (operacao == 'SUBTRAIR') {
    //     resultado = valor1 - valor2
    // } else if (operacao == 'MULTIPLICAR') {
    //     resultado = valor1 * valor2
    // } else if (operacao == 'DIVIDIR') {
    //     if (valor1 == 0 || valor2 == 0) {
    //         console.log('0 não pode ser utilizado em divisão')
    //         status = false
    //     } else {
    //         resultado = valor1 / valor2
    //     }
    // } else {
    //     console.log('ERRO: A sua escolha de operação matemática fo invalida! ')
    //     status = false
    // }


    switch (operacao) {
        case 'SOMAR':
            resultado = valor1 + valor2
            break
        case 'SUBTRAIR':
            resultado = valor1 - valor2
            break
        case 'MULTIPLICAR':
            resultado = valor1 * valor2
            break
        case 'DIVIDIR':
            if (valor1 == 0 || valor2 == 0) {
                console.log('0 não pode ser utilizado em divisão')
                status = false
            } else {
                resultado = valor1 / valor2
            }
            break
        default:
            console.log('ERRO: A sua escolha de operação matemática fo invalida! ')
            status = false
            break
    }

    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined && status == false) {
        return false
    } else {
        return resultado
    }
}

//Forma 02 de criar uma função
// const calculadora = function(){
// }

//Forma 3 de se fazer uma função(arrow fuction(JS))
const somar = (valor1, valor2) => Number(valor1) + Number(valor2)
const subtrair = (valor1, valor2) => Number(valor1) - Number(valor2)
const multiplicar = (valor1, valor2) => Number(valor1) * Number(valor2)
const dividir = (valor1, valor2) => Number(valor1) / Number(valor2)

//Permite adicionar uma fuction em escopo global (public)
//As fuctions que não estiverem com export serão tratadas apenas com escopo local
module.exports = {
    calculadora
}