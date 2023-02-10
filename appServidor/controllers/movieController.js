const Movie = require('../models/Movie');

exports.addMovie = async (req, res) => {
    try {
        let agency;
        // Crear la Pelicula
        movie = new Movie(req.body);
        await movie.save();
        res.send(movie);
    } catch (error) {
        console.log(error);

        // El error 500 es un error interno del servidor
        res.status(500).send('Hubo un error al registrar una pelicula.');
    }
};

exports.loadMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el listado de peliculas.');
    }
};

exports.loadMovie = async (req, res) => {
    try {
        let movie = await Movie.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ msg: 'Película no encontrada' });
        }
        res.json(movie);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el registro de la pelicula.');
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const { title, description, category, year, image} = req.body;
        let movie = await Movie.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ msg: 'Pelicula no encontrada' });
        }
        movie.title = title;
        movie.description = description;
        movie.category = category;
        movie.year = year;
        movie.image = image;

        // Simular una creacion de un registro, a borrar al que mandamos a actualizar
        movie = await Movie.findOneAndUpdate({ _id: req.params.id }, movie, { new: true });
        res.json(movie);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el registro de la pelicula.');
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        let movie = await Movie.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ msg: 'Peícula no encontrada' });
        }
        await Movie.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Pelicula eliminada con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar la pelicula.');
    }
};
