
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

console.log(argv);
    
console.log('base: yargs', argv.b);
console.log('listar: valor', argv.l);

/*const [ , , arg3='base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');
console.log(base);*/

//const base = 4;

crearArchivo(argv.base, argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo.blue, 'creado'))
    .catch(err => console.log(err));