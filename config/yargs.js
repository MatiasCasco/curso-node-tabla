const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if( isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Indica si se va a visualizar o no en la linea de comandos'
    })
    .argv;

    module.exports = argv;