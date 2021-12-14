const NominaData = require("../models/Nomina");

module.exports.getNomina = async (req, res) => {
    try {
        const allNominas = await NominaData.find();
        res.status(200).json(allNominas);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }}

module.exports.createNomina = async (req, res) => {
    const newNomina = new NominaData ({
        estadoNomina: req.body.estadoNomina,
        tipoLiquidacion: req.body.tipoLiquidacion,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        total: req.body.total,
    });
    try {
        await newNomina.save();
        res.status(201).json(newNomina);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

module.exports.deleteNomina = async (req, res) => {
    const _id = req.params._id;
    try {
        await NominaData.findByIdAndRemove(_id).exec();
        res.send('Succesfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}