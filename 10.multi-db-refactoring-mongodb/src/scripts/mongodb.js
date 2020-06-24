/*docker ps
docker exec -it 9d77af283b71
    mongo -u admin -p senhaadmin --authenticationDatabase admin*/
//databses
show dbs

//mudando o contexto para uma databse
use herois

// mostrar tables ( colecoes )
show collections

//insert
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})

//read
db.herois.find()
db.herois.find().pretty()

for(let i = 0;  i <= 10000; i++){
    db.herois.insert({
        nome: `Clone ${i}`,
        poder: 'Velocidade',
        dataNascimento: '1998-04-01'
    })
}

db.herois.count()
db.herois.findOne()
db.herois.find().limit(1000).sort({ nome: -1 })
db.herois.find({}, {poder: 1, _id: 0})

//update
//faz o update mas só adiciona a coluna nome, as outras são removidas
db.herois.update({ _id:ObjectId("5ef24d9079db5175e8748d5a")},
    {nome: 'Mulher maravilha'})
//faz o update sem remover as colunas que sejam diferentes de nome mas caso erre o nome da coluna, uma nova será criada
db.herois.update({ _id:ObjectId("5ef24e4f79db5175e874b46a")},
    {$set: { nome: 'Lanterna Verde'} })

//delete
db.herois.remove({})
db.herois.remove({nome: 'Mulher maravilha'})