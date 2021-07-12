const fs = require('fs');
const { argv } = require('process');
const colors = require('colors/safe');

const crearArchivo = async(base = 5, listar, hasta = 10) => {
    try {
    
        let salida='';
        let consola='';

        for (let i = 1; i <= hasta; i++) {
            salida  += `${base} x ${i} = ${base * i}\n`;
            consola += `     ${base} ${colors.red('x')} ${i} ${colors.red('=')} ${base * i}\n`;

        }

        if (listar){
            console.log(colors.black(colors.bgWhite(`===========================\n`)));
            console.log(colors.bold(colors.rainbow(`    TABLA DEL: ${base}\n`)));
            console.log(colors.black(colors.bgWhite('===========================\n')));

            console.log(colors.bold(consola))
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (err) {

        throw err;

    }

    

        
    
    
}

module.exports = {
    crearArchivo
}