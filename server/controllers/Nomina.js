const NominaData = require("../models/Nomina");
const UserData = require('../models/Users');
const UserVacaciones = require('../models/Vacaciones');
const UserPersmisos = require('../models/Permisos');

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

module.exports.getLiquidacionNomina = async (req, res) => {
    try {
      console.log('hola si empiezo')    
      const allActiveUser = await UserData.find({estado:'activo'})
              
      for (const [key, value] of Object.entries(allActiveUser)) {
        const liquidacion = value.salario - value.deducciones;
        console.log(liquidacion)
      }
  
      res.status(200).json(allActiveUser);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

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







