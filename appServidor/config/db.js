/* Para poder conectar a la BD al uso de una libreria, instalar */
const mongoose = require('mongoose');

/* Permite manejar la variable de ambaiente, instalar */
require('dotenv').config({ path: 'variables.env' });

/* Conectar a la BD 
Hay que hacerlo de forma asíncrona por que no sabemos el tiempo de respuesta del servidor
*/
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            /* propios modelos de conexion */
            useUnifiedTopology: true,
            /* Nosotros desde el servidor, vamos a manejar las busquedas en el cluster */
            //useFindAndModify: false
        });
        console.log('DB Conectada');
    } catch (error) {
        console.log(error);
        process.exit(1); // Detener la app
    }
};

module.exports = conectarDB;
