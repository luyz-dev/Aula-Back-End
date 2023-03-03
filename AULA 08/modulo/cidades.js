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
    
    if(listaDados == undefined){
        return false
    }else{
        return listaDados
    }
}

const getCapitalEstado = function(sigla){
    let uf = sigla
    let listaDados

    pegarEstados.forEach((estados) => {
        if(estados.sigla == uf){
            listaDados = {
                uf: estados.sigla,
                descricao: estados.nome,
                capital: estados.capital,
            }
        }
    })
    
    if(listaDados == undefined){
        return false
    }else{
        return listaDados
    }
}

const getEstadosRegiao = function(regiaoVar){
    let regiao = regiaoVar.toUpperCase()
    let listaRegiao
    let listaEstados
    let listaArray = []

    pegarEstados.forEach((estados) =>{
        
        if(estados.regiao == regiao){
            listaEstados = {
                uf: estados.sigla,
                descricao: estados.nome
            }
        }
        listaArray.push(listaEstados)
    })

    pegarEstados.forEach((estados) => {
        if(estados.regiao == regiao){
            listaRegiao = {
                regiao: estados.regiao,
                estados: listaArray
            }
        }
    })

    return listaRegiao
}



console.log(getEstadosRegiao('SUL'))