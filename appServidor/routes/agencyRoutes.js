// Rutas para el esquema de Agencias
// Necesario el Express
const express = require('express');
const router = express.Router();
const agencyController = require('../controllers/agencyController');

// api/agencies
// Creas una agencia
router.post('/', agencyController.addAgency);

// Cargar las Agencias
router.get('/', agencyController.loadAgencies);

// Actualizar una agencia
router.put('/:id', agencyController.updateAgency);

// Cargar un solo registro de Agencia
router.get('/:id', agencyController.loadAgency);

// Eliminar un registro de Agencia
router.delete('/:id', agencyController.deleteAgency);

module.exports = router;