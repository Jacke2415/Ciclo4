const NominaData = require("../models/Nomina");
const UserData = require('../models/Users');
const VacacionesData = require('../models/Vacaciones');
const PermisosData = require('../models/Permisos');
const LiquidacionMensualData = require('../models/LiquidacionMensual')


module.exports.getNomina = async (req, res) => {
    try {
        const allNominas = await NominaData.find();
        res.status(200).json(allNominas);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.getSumaSalario = async (req, res) => {
    try {
        const total = await
            LiquidacionMensualData.aggregate([
                { $group: { _id: { estado: 'activo' }, total: { $sum: '$salario' } } }
            ])
        console.log(total)

        res.status(200).json(allActiveUsers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

function convertir(numeroMonth) {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var numeroMes = numeroMonth;
    if (!isNaN(numeroMes) && numeroMes >= 1 && numeroMes <= 12) {
        var mes = meses[numeroMes - 1];
    }
    return mes
}

module.exports.createNominaMensual = async (req, res) => {
    const tipoLiquidacion = req.body.tipoLiquidacion;
    const fechaInicio = new Date(req.body.fechaInicio);
    const fechaFin = new Date(req.body.fechaFin);

    const mesFin = fechaFin.getMonth() + 1;
    const yearFin = fechaFin.getFullYear();

    const mes = convertir(mesFin)
    const fechaNomina = `${mes} - ${yearFin}`

    const numeroFechaNomina = await LiquidacionMensualData.find({ fechaNomina: fechaNomina }).count()
    if (numeroFechaNomina === 0) {
        const allActiveUser = await UserData.find({ estado: 'activo' })
        var newLiquidacionesMensual = []
        var total = 0

        for (const [key, value] of Object.entries(allActiveUser)) {
            const nombre = value.nombre;
            const apellido = value.apellido;
            const cedula = value.cedula;
            const salario = value.salario;
            const deduccionesLegales = value.salario * 0.04;
            const allVacaciones = await VacacionesData.find({ cedula: cedula })
            const allPermisos = await PermisosData.find({ cedula: cedula })

            var deduccionesVacaciones = 0
            for (const [key, value] of Object.entries(allVacaciones)) {
                deduccionesVacaciones += value.diasVacaciones * 117172 / 30;
            }

            var deduccionesPermiso = 0
            for (const [key, value] of Object.entries(allPermisos)) {
                if (value.tipoPermiso === 'Remunerado') {
                    deduccionesPermiso += value.diasPermiso * 117172 / 30;
                } if (value.tipoPermiso === 'No Remunerado') {
                    deduccionesPermiso += value.diasPermiso * salario / 30;
                }
            }

            const liquidacion = salario - deduccionesLegales - deduccionesVacaciones - deduccionesPermiso;
            total += liquidacion

            const newLiquidacionMensual = new LiquidacionMensualData({
                fechaNomina: fechaNomina,
                nombre: nombre,
                apellido: apellido,
                cedula: cedula,
                salario: salario,
                deducciones: deduccionesLegales,
                vacaciones: deduccionesVacaciones,
                permisos: deduccionesPermiso,
                salarioLiquidado: liquidacion
            });

            await newLiquidacionMensual.save();
            newLiquidacionesMensual.push(newLiquidacionMensual)

        }
        const newNomina = new NominaData({
            mes: mes,
            tipoLiquidacion: tipoLiquidacion,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            total: total
        });
        try {
            await newNomina.save();
            res.status(201).json({ message: 'La creación de nomina fue exitosa' });
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    } else {
        res
            .status(400)
            .json({ message: 'La nomina solicitada ya se encuentra generada!!' })
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
        const allActiveUser = await UserData.find({ estado: 'activo' })
        var newLiquidacionesMensual = []

        for (const [key, value] of Object.entries(allActiveUser)) {
            const nombre = value.nombre;
            const apellido = value.apellido;
            const cedula = value.cedula;
            const salario = value.salario;
            const deduccionesLegales = value.salario * 0.04;
            const allVacaciones = await VacacionesData.find({ cedula: cedula })
            const allPermisos = await PermisosData.find({ cedula: cedula })

            var deduccionesVacaciones = 0
            for (const [key, value] of Object.entries(allVacaciones)) {
                deduccionesVacaciones += value.diasVacaciones * 117172 / 30;
            }

            var deduccionesPermiso = 0
            for (const [key, value] of Object.entries(allPermisos)) {
                const tipoPermiso = value.tipoPermiso;
                if (tipoPermiso.value === 'Remunerado') {
                    deduccionesPermiso += value.diasPermiso * 117172 / 30;
                } if (tipoPermiso.value === 'No Remunerado') {
                    deduccionesPermiso += value.diasPermiso * salario / 30;
                }
            }

            const liquidacion = salario - deduccionesLegales - deduccionesVacaciones - deduccionesPermiso;

            const newLiquidacionMensual = new LiquidacionMensualData({
                nombre: nombre,
                apellido: apellido,
                cedula: cedula,
                salario: salario,
                deducciones: deduccionesLegales,
                vacaciones: deduccionesVacaciones,
                permisos: deduccionesPermiso,
                salarioLiquidado: liquidacion
            });

            //await newLiquidacionMensual.save();
            newLiquidacionesMensual.push(newLiquidacionMensual)
        }
        console.log(newLiquidacionesMensual)
        res
            .status(200)
            .json({ newLiquidacionesMensual })

    } catch (error) {
        console.log(error);
    }
}

/* const NominaData = require("../models/Nomina");
const UserData = require('../models/Users');
const VacacionesData = require('../models/Vacaciones');
const PermisosData = require('../models/Permisos');
const LiquidacionMensualData = require('../models/LiquidacionMensual')


module.exports.getNomina = async (req, res) => {
    try {
        const allNominas = await NominaData.find();
        res.status(200).json(allNominas);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.getSumaSalario = async (req, res) => {
    try {
      const total = await
      LiquidacionMensualData.aggregate([      
        {$group:{_id:{estado:'activo'}, total:{$sum:'$salario'}}}
        ])
      console.log(total)  
      
      res.status(200).json(allActiveUsers);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

module.exports.createNominaMensual = async (req, res) => {
    const allSalarios = await LiquidacionMensualData.find();
    var total = 0
    for (const [key, value] of Object.entries(allSalarios)){
        total += value.salarioLiquidado 
    }
    console.log(`el valor total de la nomina del mes de diciembre es: ${total}`)
    const newNomina = new NominaData({
        mes:req.body.mes,
        tipoLiquidacion: req.body.tipoLiquidacion,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        total: total
    });
    
    const allNomina = await NominaData.find()
    for (const [key, value] of Object.entries(allNomina)){
        if (value.mes === mes && value.year === year)
            res
                .status(400)
                .json({message: 'La nomina solicitada ya se encuentra generada!!'})
    }
    try {
        await newNomina.save(); 
        res.status(201).json(newNomina);
    } catch (error) {
        res.status(409).json({ message: error.message });
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
        const allActiveUser = await UserData.find({ estado: 'activo' })
        var newLiquidacionesMensual = []

        for (const [key, value] of Object.entries(allActiveUser)) {            
            const nombre = value.nombre;
            const apellido = value.apellido;
            const cedula = value.cedula;
            const salario = value.salario;
            const deduccionesLegales = value.salario * 0.04;
            const allVacaciones = await VacacionesData.find({ cedula: cedula })
            const allPermisos = await PermisosData.find({ cedula: cedula })

            var deduccionesVacaciones = 0
            for (const [key, value] of Object.entries(allVacaciones)) {
                deduccionesVacaciones += value.diasVacaciones * 117172 / 30;
            }

            var deduccionesPermiso = 0
            for (const [key, value] of Object.entries(allPermisos)) {
                const tipoPermiso = value.tipoPermiso;
                if (tipoPermiso.value === 'Remunerado') {
                    deduccionesPermiso += value.diasPermiso * 117172 / 30;
                } if (tipoPermiso.value === 'No Remunerado') {
                    deduccionesPermiso += value.diasPermiso * salario / 30;
                }
            }

            const liquidacion = salario - deduccionesLegales - deduccionesVacaciones - deduccionesPermiso;

            const newLiquidacionMensual = new LiquidacionMensualData({
                nombre: nombre,
                apellido: apellido,
                cedula: cedula,
                salario: salario,
                deducciones: deduccionesLegales,
                vacaciones: deduccionesVacaciones,
                permisos: deduccionesPermiso,
                salarioLiquidado: liquidacion
            });

            await newLiquidacionMensual.save();
            newLiquidacionesMensual.push(newLiquidacionMensual)
        }
        console.log(newLiquidacionesMensual)
        res
            .status(200)
            .json({newLiquidacionesMensual})
    
    } catch (error) {
        console.log(error);
    }
} */