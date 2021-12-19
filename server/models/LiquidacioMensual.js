const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nominaSchema = new Schema({
    nombre: {type: String, required: true},//liquidado, pendiente
    apellido: {type: String, required: true},// mensual o quincenal
    cedula: {type: String, required: true},
    salario: {type: Number, required: true},
    deducciones: {type: Number, required: true},
    vacaciones: {type:Number, required: false},
    permisos: {type:Number, required: false},
    salarioLiquidado: {type:Number, required: true},
});

const nominas = mongoose.model('nominas', nominaSchema);

module.exports = nominas;