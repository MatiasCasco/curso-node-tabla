const fs = require('fs');

const crearArchivo = async (base = 5, listar = false) => {

    try {
        

        let salida = '';

        for (let i = 0; i < 10; i++) {
            salida += `${base} x ${(i + 1)} = ${base * (i + 1)} \n`;
        }
        if (listar) {
            console.log('========================================');
            console.log(`Tabla del ${base}`);
            console.log('========================================');
            
            console.log(salida);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base} creada`;
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo: crearArchivo
}