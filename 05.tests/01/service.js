const {
    get
} = require('axios')

const URL = `https://swapi.dev/api/people`

module.exports = { 
    obterPessoas : async (nome) => {
        const url = `${URL}/?search=${nome}&format=json`
        const result = await get(url)
        console.log(result.data)
        return result.data.results.map(mapearPessoas)
    }
}

const mapearPessoas = (item) => {
    return {
        nome: item.name,
        peso: item.height
    }
}

