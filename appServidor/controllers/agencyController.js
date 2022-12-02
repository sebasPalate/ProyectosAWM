const Agency = require('../models/agency');

exports.addAgency = async (req, res) => {
    try {
        let agency;
        // Crear la Agencia
        agency = new Agency(req.body);
        await agency.save();
        res.send(agency);
    } catch (error) {
        console.log(error);

        // El error 500 es un error interno del servidor
        res.status(500).send('Hubo un error al registrar la agencia.');
    }
};

exports.loadAgencies = async (req, res) => {
    try {
        const agencies = await Agency.find();
        res.json(agencies);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el listado.');
    }
};

exports.loadAgency = async (req, res) => {
    try {
        let agency = await Agency.findById(req.params.id);
        if (!agency) {
            res.status(404).json({ msg: 'Agencia no encontrada' });
        }
        res.json(agency);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al cargar el registro de la agencia.');
    }
};

exports.updateAgency = async (req, res) => {
    try {
        const { name, address } = req.body;
        let agency = await Agency.findById(req.params.id);
        if (!agency) {
            res.status(404).json({ msg: 'Agencia no encontrada' });
        }
        agency.name = name;
        agency.address = address;

        // Simular una creacion de un registro, a borrar al que mandamos a actualizar
        agency = await Agency.findOneAndUpdate({ _id: req.params.id }, agency, { new: true });
        res.json(agency);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el registro de la agencia.');
    }
};

exports.deleteAgency = async (req, res) => { 
    try {
        let agency = await Agency.findById(req.params.id);
        if (!agency) {
            res.status(404).json({ msg: 'Agencia no encontrada' });
        }
        await Agency.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Agencia eliminada con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el registro de la agencia.');
    }
};
