// import {crearArchivo} from './writetable';
const fs = require('fs');
const { crearArchivo } = require('./helpers/writetable');
// const yargs = require('yargs');
const argv = require('./config/argv');

console.log(argv);

crearArchivo(argv.base, argv.limite, argv.verbose)
    .then(nombreArchivo => console.log(`Archivo creado: ${nombreArchivo}`))
    .catch(err => console.log(err));