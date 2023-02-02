const Matricula = require('../models/matricula');

exports.addMatricula = async (req, res) => {
    try {
        let matricula;
        matricula = new Matricula(req.body);
        await matricula.save();
        res.send(matricula);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al registrar la matricula.');
    }
}

exports.loadMatriculas = async (req, res) => {
    try {
        const matriculas = await Matricula.find();
        res.json(matriculas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el listado.');
    }
}

exports.loadMatricula = async (req, res) => {
    try {
        let matricula = await matricula.findById(req.params.id);
        if (!matricula) {
            res.status(404).json({ msg: 'Matricula no encontrada' });
        }
        res.json(matricula);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el registro de la matricula.');
    }
}

exports.updateMatricula = async (req, res) => {
    try {
        const { marca, modelo, color, placa, fecha } = req.body;
        let matricula = await Matricula.findById(req.params.id);
        if (!matricula) {
            res.status(404).json({ msg: 'Matricula no encontrada' });
        }
        matricula.marca = marca;
        matricula.modelo = modelo;
        matricula.color = color;
        matricula.placa = placa;
        matricula.fecha = fecha;

        matricula = await Matricula.findOneAndUpdate({ _id: req.params.id }, matricula, { new: true });
        res.json(matricula);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el registro de la matricula.');
    }
}

exports.deleteMatricula = async (req, res) => {
    try {
        let matricula = await Matricula.findById(req.params.id);
        if (!matricula) {
            res.status(404).json({ msg: 'Matricula no encontrada' });
        }
        await Matricula.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Agencia eliminada con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el registro de la agencia.');
    }
};
