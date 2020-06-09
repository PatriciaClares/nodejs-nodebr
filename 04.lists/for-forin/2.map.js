const {obterPlanetas} = require('./service')

Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []
    for (let indice=0; indice<=this.length-1; indice++) {
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado;
}

const main = async () => {
    try {
        const results = await obterPlanetas("c")
        //const names = []
        /*results.results.forEach(item => {
            names.push(item.name)
        })*/

        //const names = results.results.map(pessoa => pessoa.name)
        const names = results.results.meuMap((planeta, indice) => planeta.name)
        console.log("names ", names)
    } catch (error) {
        console.error('ERRO: ', error)
    }
}
main()