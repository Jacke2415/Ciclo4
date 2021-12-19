const PermisosData = require("../models/Permisos");

module.exports.getPermisos = async (req, res) => {
    try {
        const PermisosPendientes = await PermisosData.find();
        res.status(200).json(PermisosPendientes);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.createPermisos = async (req, res) => {
    const newPermisos = new PermisosData ({
        cedula: req.body.cedula,
        tipoPermiso: req.body.tipoPermiso,
        asunto: req.body.asunto,
        fechaInicial: req.body.fechaInicial,
        fechaFinal: req.body.fechaFinal,
        diasPermiso: req.body.diasPermiso,
        estado: 'Pendiente',
            
    });
    try {
        await newPermisos.save();
        res.status(201).json(newPermisos);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}