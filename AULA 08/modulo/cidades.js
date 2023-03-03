/************************************************************************************************
 * Objetivo: Cidades Brasil
 * Autor: Luiz Gustavo
 * Data: 03/03/2023
 * Versão: 1.0
************************************************************************************************/

var brasil = require('./estados_cidades')

const getListaDeEstados = function () {
    let listaJson = {}
    let uf = []

    brasil.estadosCidades.estados.forEach(function(estado){
        uf.push(estado.sigla)
    })

    listaJson = {
        uf
    }

    return listaJson
}

console.log(getListaDeEstados())