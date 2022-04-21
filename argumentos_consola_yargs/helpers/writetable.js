// import {writeFileSync} from 'fs';
const { writeFileSync } = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, limite = 15, verbose = false) => {

    try {
        salida = "================================\n".green;
        salida += "========= Tabla del "  + colors.yellow(base) + " ==========\n";
        salida += "================================\n".green;
        for (let i = 1; i <= limite; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
        }
        if (verbose) {
            console.log(salida);
        }
        nombreArchivo = `tabla-${base}.txt`;
        writeFileSync(`tabla-${base}.txt`, salida);
        return nombreArchivo;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}