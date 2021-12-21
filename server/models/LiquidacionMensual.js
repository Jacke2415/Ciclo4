const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LiquidacionMensualSchema = new Schema({
    fechaNomina: {type: String, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    cedula: {type: String, required: true},
    salario: {type: Number, required: true},
    deducciones: {type: Number, required: true},
    vacaciones: {type:Number, required: false},
    permisos: {type:Number, required: false},
    salarioLiquidado: {type:Number, required: true},
},
{
    timestamps: true,
    versionKey: false,
}
);

const LiquidacionMensual = mongoose.model('LiquidacionMensual', LiquidacionMensualSchema);

module.exports = LiquidacionMensual;