const {obterPlanetas} = require('./service')

Array.prototype.meuReduce = function(callback, valorInicial){
    valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for(let index=0; index<=this.length -1; index++){
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}

const main = async () => {
    try {
        const {results} = await obterPlanetas(`a`) 
        const periodoRotacao = results.map(item => parseInt(item.rotation_period))
        console.log("rotation_period: ", periodoRotacao)

        /*const total =  periodoRotacao.reduce((anterior, proximo) => {
            return anterior + proximo;
        },0)*/

        const minhaLista = [
            ['Erick', 'Wendel'],
            ['NodeBr', 'Nerdzao']
        ]

        const total = minhaLista.meuReduce((anterior, proximo) =>{
            return anterior.concat(proximo)
        }, [])
        .join(', ')
        console.log("Total: ",total)
    } catch (error) {
        console.error('ERRO: ', error)
    }
}
main()