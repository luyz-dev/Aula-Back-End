/************************************************************************************************
 * Objetivo: Utilizar códigos e métodos de Array e JSON
 * Autor: Luiz Gustavo
 * Data: 27/02/2023
 * Versão: 2.0
************************************************************************************************/

// [ ] - representa um obejto do tipo array
// { } - representa um obejto do tipo json

/**********************************************************************
 * JSON é composto: chave (atributo) e valor
 * 
 *   Chave  Valor   Chave      Valor       Chave     Valor
 *  {nome: 'José', celular: '11977777777', email: 'jose@gmail.com'}
 * 
**********************************************************************/

const listaNomes = ['José', 'Maria', 'Luiz', 'Antônio', 'Ana', 'Carlos']

const listaProdutos = ['Mouse G PRO SuperLight', 'Gabinete', 'Redragon Kumara', 'Monitor 240hz LG', 'SSD M.2 NVME', 'Memoria']

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

    if (indice >= 0) {
        listaProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }
    return status
}

const removerItem = function (nomeItem, arrayLista) {
    let nome = nomeItem
    const copiaLista = arrayLista.slice()
    let indice = copiaLista.indexOf(nome)
    let status

    if (indice >= 0) {
        copiaLista.splice(indice, 1)
        status = copiaLista
    } else {
        status = false
    }
    return status

    //ou 
    // if(status){
    //     return copiaLista
    // }else{
    //     return false
    // }
}

const listagemProdutos = function () {
    //Forma nº1 de criar um JSON e já atribuir chaves e valores
    // let listProdutosJson = {produtos: arrayProdutos, nomes : listaNomes}

    //Forma nº2 de criar um JSON, onde as chaves e valores são atribuidos no decorrer do projeto
    // let listProdutosJson = {}

    // listProdutosJson.produtos = listaProdutos
    // listProdutosJson.clientes = listaNomes

    // Extraindo valores de um JSON e ARRAY
    // console.log(listProdutosJson)
    // console.log(listProdutosJson.produtos)
    // console.log(listProdutosJson.produtos[1])

    let listProdutosJson = {}
    let listProdutosArray = [
        { nome: 'Monitor', quantidade: 500, marca: 'DELL', valor: 1000, descricao: 'Monitor dell de ultima geração', codigo: 1 },
        { nome: 'Monitor', quantidade: 300, marca: 'LG', valor: 1500, descricao: 'Monitor LG de ultima geração 144hz', codigo: 2 },
        { nome: 'Teclado', quantidade: 200, marca: 'Redragon', valor: 200, descricao: 'Teclado mecanico de ultima geração', codigo: 3 },
        { nome: 'Teclado', quantidade: 400, marca: 'Logitech', valor: 500, descricao: 'Teclado mecanico de ultima geração', codigo: 4 },
        { nome: 'Mouse', quantidade: 600, marca: 'Logitech', valor: 350, descricao: 'Mouse de ultima geração, com 25K de DPI', codigo: 5 },
        { nome: 'Mouse', quantidade: 300, marca: 'Razer', valor: 300, descricao: 'Mouse de ultima geração, com 16K de dpi', codigo: 6 }
    ]

    let listCoresDellArray = ['Preto', 'Branco', 'Cinza']
    let listCoresLgArray = ['Preto', 'Cinza']
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul']
    let listCoresMouseArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo', 'Cinza']

    // Adiciona Array de produtos dentro de um JSON
    listProdutosJson.produtos = listProdutosArray

    // Adicionar cores ao monitor dell
    listProdutosJson.produtos[0].cores = listCoresDellArray

    // Adicionar cores ao monitor lg
    listProdutosJson.produtos[1].cores = listCoresLgArray

    // Adicionar cores ao teclado
    listProdutosJson.produtos[2].cores = listCoresTecladoArray
    listProdutosJson.produtos[3].cores = listCoresTecladoArray

    // Adicionar cores ao mouse
    listProdutosJson.produtos[4].cores = listCoresMouseArray
    listProdutosJson.produtos[5].cores = listCoresMouseArray

    // Arrays para modelos
    let listModeloMonitor = ['LCD', 'LED', 'OLED', '4K', '5K', 'IPS']
    let listModeloTeclado = ['Mecânico', 'SemiMecânico', 'Membrana', 'ÓPTICO']

    // Adicionar modelos monitores
    listProdutosJson.produtos[0].modelo = listModeloMonitor
    listProdutosJson.produtos[1].modelo = listModeloMonitor

    // Adicionar modelos teclado
    listProdutosJson.produtos[2].modelo = listModeloTeclado
    listProdutosJson.produtos[3].modelo = listModeloTeclado


    console.table(listProdutosJson.produtos)
    console.log('****************** Relátorio ******************')
    console.log(`* Nome: ${listProdutosJson.produtos[1].nome}`)
    console.log(`* Marca: ${listProdutosJson.produtos[1].marca}`)
    console.log(`* Valor: ${listProdutosJson.produtos[1].valor}`)
    console.log(`* Cor: ${listProdutosJson.produtos[1].cores[1]}`)
    console.log(`* Modelo: ${listProdutosJson.produtos[1].modelo[1]}`)
    console.log('***********************************************')
}

const relatorioDeProdutos = function () {
    let listProdutosJson = {}
    let listProdutosArray = [
        { nome: 'Monitor', quantidade: 500, marca: 'DELL', valor: 1000, descricao: 'Monitor dell de ultima geração', codigo: 1 },
        { nome: 'Monitor', quantidade: 300, marca: 'LG', valor: 1500, descricao: 'Monitor LG de ultima geração 144hz', codigo: 2 },
        { nome: 'Teclado', quantidade: 200, marca: 'Redragon', valor: 200, descricao: 'Teclado mecanico de ultima geração', codigo: 3 },
        { nome: 'Teclado', quantidade: 400, marca: 'Logitech', valor: 500, descricao: 'Teclado mecanico de ultima geração', codigo: 4 },
        { nome: 'Mouse', quantidade: 600, marca: 'Logitech', valor: 350, descricao: 'Mouse de ultima geração, com 25K de DPI', codigo: 5 },
        { nome: 'Mouse', quantidade: 300, marca: 'Razer', valor: 300, descricao: 'Mouse de ultima geração, com 16K de dpi', codigo: 6 }
    ]

    let listCoresDellArray = ['Preto', 'Branco', 'Cinza']
    let listCoresLgArray = ['Preto', 'Cinza']
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul']
    let listCoresMouseArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo', 'Cinza']

    // Adiciona Array de produtos dentro de um JSON
    listProdutosJson.produtos = listProdutosArray

    // Adicionar cores ao monitor dell
    listProdutosJson.produtos[0].cores = listCoresDellArray

    // Adicionar cores ao monitor lg
    listProdutosJson.produtos[1].cores = listCoresLgArray

    // Adicionar cores ao teclado
    listProdutosJson.produtos[2].cores = listCoresTecladoArray
    listProdutosJson.produtos[3].cores = listCoresTecladoArray

    // Adicionar cores ao mouse
    listProdutosJson.produtos[4].cores = listCoresMouseArray
    listProdutosJson.produtos[5].cores = listCoresMouseArray

    // Arrays para modelos
    let listModeloMonitor = ['LCD', 'LED', 'OLED', '4K', '5K', 'IPS']
    let listModeloTeclado = ['Mecânico', 'SemiMecânico', 'Membrana', 'ÓPTICO']

    // Adicionar modelos monitores
    listProdutosJson.produtos[0].modelo = listModeloMonitor
    listProdutosJson.produtos[1].modelo = listModeloMonitor

    // Adicionar modelos teclado
    listProdutosJson.produtos[2].modelo = listModeloTeclado
    listProdutosJson.produtos[3].modelo = listModeloTeclado

    let cont = 0
    let contCor = 0
    let contModelo = 0
    let tamanhoArrayProduto = listProdutosJson.produtos.length
    console.log('****************** Relátorio ******************')
    while (cont < tamanhoArrayProduto) {
        console.log('Nome: ' + listProdutosJson.produtos[cont].nome)
        console.log('Quantidade: ' + listProdutosJson.produtos[cont].quantidade)
        console.log('Marca: ' + listProdutosJson.produtos[cont].marca)
        console.log('Valor: ' + listProdutosJson.produtos[cont].valor)
        console.log('Descrição: ' + listProdutosJson.produtos[cont].descricao)
        console.log('Código: ' + listProdutosJson.produtos[cont].codigo)
        let contadorCor = contCor
        console.log('Cores: ')
        while (contadorCor < listProdutosJson.produtos[cont].cores.length) {
            console.log('    *' + listProdutosJson.produtos[cont].cores[contadorCor])
            contadorCor++
        }
        let contadorModelo = contModelo
        if (cont > 3) {
            console.log('**************************************************')
            cont++
        } else {
            console.log('Modelos: ')
            while (contadorModelo < listProdutosJson.produtos[cont].modelo.length) {
                console.log('    *' + listProdutosJson.produtos[cont].modelo[contadorModelo])
                contadorModelo++
            }
            console.log('**************************************************')
            cont++
        }

    }
}

relatorioDeProdutos()