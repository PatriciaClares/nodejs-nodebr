const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')

class Postgres extends ICrud {
    constructor(){
        super()
        this._driver = null
        this._herois = null
    }

    create(item){
        console.log('O item foi salvo em Postgres')
    }

    _connect() {
        this._driver = new Sequelize(
            'heroes',
            'patriciaClares',
            'minhasenhasecreta', 
            {
                host:'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
            }
        )
    }
}

module.exports = Postgres