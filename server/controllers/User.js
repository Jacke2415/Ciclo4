const UserData = require("../models/User");

module.exports.getUser = async (req, res) => {
    try {
        const allUsers = await UserData.find({});
        res.status(200).json(allUsers);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.createUser = async (req, res) => {
    const newUser = new UserData ({
        tipo_usuario: 2,
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
    try {
        await newUser.save();
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

module.exports.getSumaSalario = async (req, res) => {
    try {
        const allUsersActive = await UserData.find({estado:"activo"});
        
        const total =  allUsersActive[0] ;
        console.log(total);
        res.status(200).json(total);

        /* db.users.aggregate([
            {$match:{$or:[{estado:"activo"},{estado:'desactivado'}]}},
            //{$match:[{estado:'activo'}]},
            {$group:{_id:'$estado', total:{$sum:'$salario'}}}
            ]) */
        //total:{$sum:'$salario'}
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}