const {obterPlanetas} = require('./service')

const main = async () => {
    try{
        const result = await obterPlanetas('C')
        const names = []

        console.time('for')
        for(let i=0; i<= result.results.length -1; i++){
            const planetas = result.results[i]
            names.push(planetas.name)
        }
        console.timeEnd('for') 

        console.time('forin')
        for(let i in result.results){
            const planeta = result.results[i]
            names.push(planeta.name)
        }
        console.timeEnd('forin') 

        console.time('forof')
        for(planeta of result.results){
            names.push(planeta.name)
        }
        console.timeEnd('forof')

        console.log(`names`, names)
    } catch(error) {
        console.error('error interno ', error)
    }
}
main()