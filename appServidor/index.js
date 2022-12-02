/* Requiere la libreria de express */
const express = require('express');

/* Requiere la libreria de cors */
const cors = require('cors');

/* Crear el Servidor */
const app = express();

/* Llamar al archivo de configuracion */
const conectarDB = require('./config/db');

/* Conexión a la BD */
conectarDB();
app.use(express.json());

/* Habilitar Cors */
app.use(cors());

/* Puerto de la app */
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Como se va hacer referencia desde el servidor
app.use('/api/agencias', require('./routes/agencyRoutes'));

app.listen(4500, () => { console.log('Servidor en el puerto 4500') });