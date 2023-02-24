/************************************************************************************************
 * Objetivo: Utilizar códigos e métodos de Array
 * Autor: Luiz Gustavo
 * Data: 24/02/2023
 * Versão: 1.0
************************************************************************************************/

// [ ] - representa um obejto do tipo array
// { } - representa um obejto do tipo json

const listaNomes = ['José', 'Maria', 'Luiz', 'Antônio', 'Ana', 'Carlos']

const listaProdutos = ['Mouse G PRO SuperLight','Gabinete', 'Redragon Kumara', 'Monitor 240hz LG', 'SSD M.2 NVME', 'Memoria']

const exibindoDados = function () {


    //Verifica o tipo de dados do elemento listaNomes
    console.log(typeof (listaNomes))

    //Verifica o tipo de dados dos itens do array
    console.log(typeof (listaNomes[0]))

    //Exibe o conteúdo de um indice
    console.log(listaNomes[0])

    //Exibe todos os itens do array
    console.log(listaNomes)

    //table - permite visualizar o conteúdo do array em formato de tabela
    console.table(listaNomes)

    //Percorrendo um array com WHILE
    console.log('********************* Exemplo com While *********************')
    let cont = 0
    let qtdeItens = listaNomes.length
    while (cont < qtdeItens) {
        console.log(`O nome do aluno é ${listaNomes[cont]}`)
        cont++
    }

    //Percorrendo um array com FOR
    console.log('********************* Exemplo com For *********************')
    for (let contador = 0; contador < qtdeItens; contador++) {
        console.log(`O nome do aluno é ${listaNomes[contador]}`)
    }

    //Percorrendo um array com FOREACH
    console.log('********************* Exemplo com ForEach *********************')
    //Para cada item do lista nome ele vai mandar para um argumento.
    // listaNomes.forEach(function(nome){
    //     console.log(`O nome do aluno é ${nome}`)
    // })

    listaNomes.forEach((nome) => console.log(`O nome do aluno é ${nome}`))

}

const manipulandoDados = function () {



    //push - Adiciona novos itens no final do array,  preservando os elementos anteriores
    listaProdutos.push('MousePad Speed++ Ace Fallen')
    listaProdutos.push('Webcam', 'Gabinete')

    //unshift - Adiciona novos itens no inicio do array, re-organizando todos os elementos
    listaProdutos.unshift('SSD', 'Placa-Mãe')

    //pop - Remove o ultimo item do array, preservando os elementos anteriores
    listaProdutos.pop()

    //shift - Remove o primeiro item do array, re-organizando todos os elementos
    listaProdutos.shift()

    console.table(listaProdutos)

    //slice - Permite criar uma cópia de um array
    const novosProdutos = listaProdutos.slice()
    console.table(novosProdutos)

    //indexOf - Permite buscar dentro de um array um item
    //Se o retorno for -1, o item não foi encontrado
    //Se o retorno for maior ou igual a 0, o item foi encontrado e ele retorna o indice
    console.log(listaProdutos.indexOf('Placa-Mãe'))

    //Exemplo de utilização do indexOf 
    if (listaProdutos.indexOf('Pc') >= 0) {
        console.log('Item encontrado!')
    } else {
        console.log('Item não encontrado!')
    }



    const teste = listaProdutos.concat(novosProdutos)
    console.table(teste)
}

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    //splice - Permite apagar um ou mais itens de um array através do indice
        //Se for encaminhado somente o indice ele irá apagar todos os itens 
        //para baixo
        //Para limitar a quantidade de itens a ser apagado, devemos informar como segundo parametro

    if(indice >= 0){
        listaProdutos.splice(indice, 1)
        status = true
    }else{
        status = false
    }
    return status
}

const removerItem = function(nomeItem, arrayLista) {
    let nome = nomeItem
    const copiaLista = arrayLista.slice()
    let indice = copiaLista.indexOf(nome)
    let status

    if(indice >= 0){
        copiaLista.splice(indice, 1)
        status = copiaLista
    }else{
        status = false
    }
    return status
}

console.table(removerItem('José', listaNomes))
console.table(listaNomes)
