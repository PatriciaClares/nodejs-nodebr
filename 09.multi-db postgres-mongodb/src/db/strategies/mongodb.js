const ICrud = require('./interfaces/interfaceCrud')
const Mongoose = require('mongoose')
const STATUS = {
    0: 'Desconectado',
    1: 'Conectado',
    2: 'Conectando',
    3: 'Desconectando' 
}

class MongoDB extends ICrud{
    constructor(){
        super()
        this._herois = null
    }

    async isConnected() {
        const state = STATUS[connection.readyState]
        if(state === 'Conectado') return state;

        if(state !== 'Conectando') return state;

        await new Promise(resolve => setTimeout(resolve, 1000))

        return STATUS[Mongoose.connection.readyState]
    }

    defineModel() {
        this._herois = new Mongoose.Schema({
            nome: {
                type: String,
                required: true
            },
            poder: {
                type: String,
                required: true
            },
            insertedAt: {
                type: Date,
                default: new Date()
            }
        })
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