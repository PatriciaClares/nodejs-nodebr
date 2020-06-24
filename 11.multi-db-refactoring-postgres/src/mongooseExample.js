const Mongoose = require('mongoose')
Mongoose.connect('mongodb://admin:senhaadmin@localhost:27017/admin', { useUnifiedTopology: true,
useNewUrlParser: true}, error => {
    if(!error) return;
    console.log('Falha na conexão!', error)
})

const connection = Mongoose.connection

connection.once('open', () => console.log('database rodando!!') )
//const state = connection.readyState
//console.log('state', state)
/*
0 : desconectado
1 : conectadp
2 : Desconectando 
*/

const heroiSchema = new Mongoose.Schema({
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

const model = Mongoose.model('herois', heroiSchema)

async function main() {
    const resultCadastrar = await model.create({
        nome: 'Batman',
        poder: 'Dinheiro'
    })
    console.log('resultCadastrar', resultCadastrar)

    const listItems = await model.find()
    console.log('listItems', listItems)
}
main()