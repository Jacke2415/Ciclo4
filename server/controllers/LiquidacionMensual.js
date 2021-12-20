const UserData = require('../models/Users');
const VacacionesData = require('../models/Vacaciones');
const PermisosData = require('../models/Permisos');
const LiquidacionMensualData = require('../models/LiquidacionMensual')

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
        res.status(404).json({ message: error.message });
    }
};