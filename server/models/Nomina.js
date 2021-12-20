const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nominaSchema = new Schema({
    tipoLiquidacion: {type: String, required: true},// mensual o quincenal
    fechaInicio: {type: Date, required: true},
    fechaFin: {type: Date, required: true},
    total: {type: Number, required: true},
});

const nominas = mongoose.model('nominas', nominaSchema);

module.exports = nominas;