// Rutas para el esquema de Agencias
// Necesario el Express
const express = require('express');
const router = express.Router();
const matriculaController = require('../controllers/matriculaController');

// api/agencies
// Creas una agencia
router.post('/', matriculaController.addMatricula);

// Cargar las Agencias
router.get('/', matriculaController.loadMatriculas);

// Actualizar una agencia
router.put('/:id', matriculaController.updateMatricula);

// Cargar un solo registro de Agencia
router.get('/:id', matriculaController.loadMatricula);

// Eliminar un registro de Agencia
router.delete('/:id', matriculaController.deleteMatricula);

module.exports = router;