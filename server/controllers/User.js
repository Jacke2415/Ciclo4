const UserData = require("../models/User");

module.exports.getUser = async (req, res) => {
    try {
        const allUsers = await UserData.find();
        res.status(200).json(allUsers);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.createUser = async (req, res) => {
    const newUser = new UserData ({
        tipo_usuario: 0,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        tipo_identificacion: req.body.tipo_identificacion,
        cedula: req.body.cedula,
        password: req.body.password,
        fecha_nacimiento: req.body.fecha_nacimiento,
        sexo: req.body.sexo,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        email: req.body.email,
        fecha_ingreso: req.body.fecha_ingreso,
        tipo_contrato: req.body.tipo_contrato,
        salario: req.body.salario,
        cargo: req.body.cargo,
        estado: 'activo',
    });
    
    newUser.password = await newUser.encryptPassword(newUser.password);
    try {
        await newUser.save();
        /* req.flash('success_msg', 'You are registered!!') */
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

module.exports.deleteUser = async (req, res) => {
    const cedula = req.params.cedula;
    try {
        await UserData.findByIdAndRemove(cedula).exec();
        res.send('Succesfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}