const { obterPlanetas } = require('./service')

Array.prototype.meuFilter = function(callback) {
    const lista = []
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}
 
const main = async () => {
    try {
        const {
            results
        } = await obterPlanetas('c')
        
       /* const familiaLars = results.filter(item => {
            const result = item.name.indexOf('C') === -1
            return result
        })  */
        const familiaLars = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return  item.name.indexOf('C') !== -1
        })

        const names = familiaLars.map(planeta => planeta.name)
        console.log(names)
    } catch (error) {
        console.error('ERROR: ', error)
    }
}
main()