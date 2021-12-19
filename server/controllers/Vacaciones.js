const VacacionesData = require("../models/Vacaciones");

module.exports.getVacaciones = async (req, res) => {
    try {
        const vacacionesPendientes = await VacacionesData.find();
        res.status(200).json(vacacionesPendientes);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.createVacaciones = async (req, res) => {
    const newVacaciones = new VacacionesData ({
        cedula: req.body.cedula,
        fechaInicial: req.body.fechaInicial,
        fechaFinal: req.body.fechaFinal,
        diasVacaciones: req.body.diasVacaciones,
        estado: 'Pendiente',
        
    });
    try {
        await newVacaciones.save();
        res.status(201).json(newVacaciones);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}
