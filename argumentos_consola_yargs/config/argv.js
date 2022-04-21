

const argv = require('yargs')
    .option('base', {
        alias: 'b',
        desc: 'Numero de la tabla',
        type: 'number',
        demandOption: true,
        demand: true
    })
    .option('limite', {
        alias: 'l',
        desc: 'Limite de la tabla',
        type: 'number',
        demandOption: true,
        default: 10
    }).option('verbose', {
        alias: 'v',
        desc: 'Muestra el resultado en consola',
        type: 'boolean',
        demandOption: true,
        default: false
    })
    .check((argv, options) => {
        if (isNaN(argv.base) || isNaN(argv.limite)) {
            throw new Error('La base y el limite deben ser un numero');
        } else if (argv.limite > 100) {
            throw new Error('El limite no debe ser mayor que 100');
        }
        return true;
    })
    // .help()
    .argv;

module.exports = argv;