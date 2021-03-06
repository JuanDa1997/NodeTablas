const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type:'boolean',
        default: false,
        describe:'Este es el numero hasto donde quieres multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type:'number',
        default: '10',
        describe:'Muestra la tabla en pantalla'
    })
    .check((argv,option)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }

        return true;
            
    })
    .argv;
module.exports = argv;