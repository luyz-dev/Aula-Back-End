/************************************************************************************************
 * Objetivo: Arquivo Tabuada
 * Autor: Luiz Gustavo
 * Data: 09/02/2023
 * Versão: 1.0
************************************************************************************************/

//Função que gera uma tabuada até uma valor específico
const calcularTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',', '.'))
    let maxContador = Number(String(maxMultiplicador).replace(',', '.'))
    let status = true
    let resultado

    if (tabuada == 0 || maxContador == 0) {
        status = false
    } else if (isNaN(tabuada) || isNaN(maxContador)) {
        status = false
    } else if (maxMultiplicador >= 0){
        // while (cont <= maxContador) {
        //     resultado = tabuada * cont
        //     console.log(`${tabuada} x ${cont} = ${resultado} \n`)
        //     cont++
        // }
        for(let cont = 0; cont <= maxContador; cont++){
            resultado = tabuada * cont
            console.log(`${tabuada} x ${cont} = ${resultado} \n`)
        }
        return status
    }else{
        for(let cont = 0; cont >= maxContador; cont--){
            resultado = tabuada * cont
            console.log(`${tabuada} x ${cont} = ${resultado} \n`)
        }
        return status
    }
}

module.exports = {
    calcularTabuada
}