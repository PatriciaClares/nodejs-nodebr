const axios = require('axios')
const URL = 'https://swapi.dev/api/planets'

module.exports = {
    obterPlanetas: async (nome) => {
        const url = `${URL}/?search=${nome}&format=json`
        const response = await axios.get(url)
        return response.data
    }
}