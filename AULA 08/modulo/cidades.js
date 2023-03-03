/************************************************************************************************
 * Objetivo: Cidades Brasil
 * Autor: Luiz Gustavo
 * Data: 03/03/2023
 * Versão: 1.0
************************************************************************************************/

var brasil = require('./estados_cidades')

let pegarEstados = brasil.estadosCidades.estados

const getListaDeEstados = function () {
    let listaJson = {}
    let uf = []
    let quantidade

    pegarEstados.forEach((estado) => uf.push(estado.sigla))

    listaJson = {
        uf,
        quantidade: pegarEstados.length
    }

    return listaJson
}

const getDadosEstado = function (sigla) {
    let uf = sigla
    let listaDados = {}

    pegarEstados.forEach((estados) => {
        if(estados.sigla == uf){
            listaDados = {
                uf: estados.sigla,
                descricao: estados.nome,
                capital: estados.capital,
                regiao: estados.regiao
            }
        }
    })
    return listaDados
}



console.log(getDadosEstado('SP'))