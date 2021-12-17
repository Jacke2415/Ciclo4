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
        //total: req.body.total,
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

module.exports.total = async(req, res) =>{
    const nomina = await NominaData.find();
    res.status(200).json(nomina)
    
    //db.getCollection("users").find({estado:'activo'});
   /*  db.users.aggregate([
    {$match:{$or:[{estado:"activo"},{estado:'desactivado'}]}},
    //{$match:[{estado:'activo'}]},
    {$group:{_id:'$estado', total:{$sum:'$salario'}}}
    ]) */
}


//------------------Vacaciones-------------------------------

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
        cedula: 1129567866,
        fechaInicial: req.body.fechaInicial,
        fechaFinal: req.body.fechaFinal,
        estado: 'Pendiente',
        
    });
    try {
        await newVacaciones.save();
        res.status(201).json(newVacaciones);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}



//--------------------CrearEmpleado--------------------------------

module.exports.createUser = async (req, res) => {
    const newUser = new UserData({
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
  
    const email = await UserData.findOne({ email: newUser.email });
    if (email) {
      return res
        .status(400)
        .json({email: 'El email ya se encuentra registrado', password: ''});
    };         
    try {
      const user = await UserData.create(newUser);
      console.log(user);
      /*  error: si el token se crea siempre que se crea un usuario
          cuando un usuario administrador registre un nuevo usuario
          lo sacara de su session.. 
      */
      /* const token = createToken(user._id); */
      res
        /* .cookie('access_token', token, { httpOnly: true, maxAge: maxAge * 1000 }) */
        .status(201)
        .json({ message: 'Su registro ha sido exitoso!!', newUser });
      } catch (error) {
        res
          .status(409)
          .json({ message: error.message});
      }
    };