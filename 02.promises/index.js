const util = require('util')

const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    });
}

function obterTelefone(idUsuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: "11093984",
                DDD: 11
            })
        }, 2000)
    });
}

function obterEndereco(idUsuario, callback){
        setTimeout(() => {
            return callback(null, {
                rua: "doa bobos",
                numero: 9
            })
        }, 2000)
    }
    
const main = async () => {
    try{
        console.time('medida-promise')
        const usuario = await obterUsuario();
        //const telefone = await obterTelefone(usuario.id);
        //const endereco = await obterEnderecoAsync(usuario.id);

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Usuario: ${usuario.nome}
            Telefone: (${telefone.DDD}) ${telefone.telefone}
            Endereço: ${endereco.rua} ${endereco.numero}
        `)
        console.timeEnd('medida-promise')
    } catch(error) {
        console.log('DEU RUIM', error)
    }
}
main()
