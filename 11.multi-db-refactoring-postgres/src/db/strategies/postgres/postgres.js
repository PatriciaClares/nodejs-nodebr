const ICrud = require('../interfaces/interfaceCrud')
const Sequelize = require('sequelize')
const { connection } = require('mongoose')

class Postgres extends ICrud {
    constructor(connection, schema){
        super()
        this._connection = connection
        this._schema = schema
    }

    async isConnected(){
        try {
            await this._connection.authenticate()
            return true
        } catch (error) {
            console.log('fail!', error)
            return false;
        }
    }

    async defineModel(connection, schema) {
        const model = connection.define(schema.name, schema.schema, schema.options)
        await this._schema.sync()
        return model
    }

    async create(item){
        const { dataValues }  = await this._schema.create(item)

        return dataValues
    }

    async read(item = {}) {
       return this._schema.findAll({ where: item, raw: true })
    }

    async update(id, item){
        return this._schema.update(item, { where: {id: id}})
    }

    async delete(id){
        const query = id? { id } : {}
        return this._schema.destroy({where: query})
    }
    
    async connect() {
        this._connection = new Sequelize(
            'heroes',
            'patriciaClares',
            'minhasenhasecreta', 
            {
                host:'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
            }
        )
        await this.defineModel()
    }
}

module.exports = Postgres