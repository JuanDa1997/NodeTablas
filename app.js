const colors = require('colors/safe');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(colors.bold(colors.rainbow(nombreArchivo,'creado'))))
    .catch(err => console.log(err));



