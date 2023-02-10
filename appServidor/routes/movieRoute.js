//Rutas para el esquema de Curso
const express = require('express')
const router = express.Router()
const courseController = require('../controllers/movieController')

//api/cursos
router.post('/', courseController.addMovie)
router.get('/', courseController.loadMovies)
router.put('/:id', courseController.updateMovie)
router.get('/:id', courseController.loadMovie)
router.delete('/:id', courseController.deleteMovie)

module.exports = router