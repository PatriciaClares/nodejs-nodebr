class NotImplementedException extends Error {
    constructor(){
        super("No implemented Exception")
    }
}

class ICrud {
    create(item){
        throw new NotImplementedException()
    }

    read(query){
        throw new NotImplementedException()
    }

    update(id, item){
        throw new NotImplementedException()
    }

    delete(id){
        throw new NotImplementedException()
    }
}

module.exports = ICrud

class MongoDB extends ICrud{
    constructor(){
        super()
    }

    create(item){
        console.log('O item foi salvo em MongoDB')
    }
}

class Postgres extends ICrud {
    constructor(){
        super()
    }

    create(item){
        console.log('O item foi salvo em Postgres')
    }
}

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgres =  new ContextStrategy(new Postgres())
contextPostgres.create()