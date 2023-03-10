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

    pegarEstados.forEach((estado) => uf.push(estado.sigla))

    listaJson = {
        uf,
        quantidade: pegarEstados.length
    }

    return listaJson
}

const getDadosEstado = function (sigla) {
    let uf = sigla
    let listaDados
    let status

    if (uf == undefined) {
        status = false
    } else {
        pegarEstados.forEach((estados) => {
            if (estados.sigla.toUpperCase() == uf.toUpperCase()) {
                listaDados = {
                    uf: estados.sigla,
                    descricao: estados.nome,
                    capital: estados.capital,
                    regiao: estados.regiao
                }
            }
        })

        if (listaDados == undefined) {
            status = false
        } else {
            status = listaDados
        }

    }
    return status
}

const getCapitalEstado = function (sigla) {
    let uf = sigla
    let listaDados
    let status

    if (uf == undefined) {
        status = false
    } else {
        pegarEstados.forEach((estados) => {
            if (estados.sigla.toUpperCase() == uf.toUpperCase()) {
                listaDados = {
                    uf: estados.sigla,
                    descricao: estados.nome,
                    capital: estados.capital,
                }
            }
        })

        if (listaDados == undefined) {
            status = false
        } else {
            status = listaDados
        }
    }
    return status
}

const getEstadosRegiao = function (regiaoVar) {
    let regiao = regiaoVar
    let listaRegiao
    let listaArray
    let listaEstados = []
    let status

    if (regiao == undefined) {
        status = false
    } else {

        pegarEstados.forEach((estados) => {

            if (estados.regiao.toUpperCase() == regiao.toUpperCase()) {
                listaArray = {
                    uf: estados.sigla,
                    descricao: estados.nome,

                }

                listaEstados.push(listaArray)

                listaRegiao = {
                    regia: estados.regiao,
                    estados: listaEstados
                }
            }

        })

        if (listaRegiao == undefined) {
            status = false
        } else {
            status = listaRegiao
        }
    }
    return status
}

const getCapitalPais = function () {
    let listaArray
    let capitais = []
    let listaEstados = {}
    let status = true

    pegarEstados.forEach((estados) => {
        if (estados.capital_pais != undefined) {
            listaEstados = {
                capital_atual: estados.capital_pais.capital,
                uf: estados.sigla,
                descricao: estados.nome,
                capital: estados.capital,
                regiao: estados.regiao,
                capital_pais_ano_inicio: estados.capital_pais.ano_inicio,
                capital_pais_ano_fim: estados.capital_pais.ano_fim
            }
            capitais.push(listaEstados)
            listaArray = {
                capitais
            }
        }
    })

    if (listaArray == undefined) {
        status = false
    } else {
        status = listaArray
    }
    return status
}

const getCidades = function (sigla) {
    let uf = sigla
    let cidades = []
    let listaArray = []
    let status

    if (uf == undefined) {
        status = false
    } else {
        pegarEstados.forEach((estados) => {
            if (estados.sigla.toUpperCase() == uf.toUpperCase()) {
                estados.cidades.forEach((cidade) => {
                    cidades.push(cidade.nome)
                })
                listaArray = {
                    uf: estados.sigla,
                    descricao: estados.nome,
                    quantidade: estados.cidades.length,
                    cidades: cidades
                }
            }
        })
        if (listaArray == undefined) {
            status = false
        } else {
            status = listaArray
        }
        return status
    }
}

module.exports = {
    getListaDeEstados,
    getEstadosRegiao,
    getDadosEstado,
    getCidades,
    getCapitalPais,
    getCapitalEstado
}