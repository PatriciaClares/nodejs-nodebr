const ICrud = require('./interfaces/interfaceCrud')
const Mongoose = require('mongoose')

class MongoDB extends ICrud{
    constructor(){
        super()
    }

    connect() {
        Mongoose.connect('mongodb://admin:senhaadmin@localhost:27017/admin', { 
            useUnifiedTopology: true,
            useNewUrlParser: true
        }, error => {
                if(!error) return;
                console.log('Falha na conexão!', error)
        })

        const connection = Mongoose.connection
        connection.once('open', () => console.log('database rodando!!') )
    }

}
module.exports = MongoDB