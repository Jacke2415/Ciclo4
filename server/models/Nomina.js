const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nominaSchema = new Schema({
    estadoNomina: {type: String, required: true},//liquidado, pendiente
    tipoLiquidacion: {type: String, required: true},// mensual o quincenal
    fechaInicio: {type: Date, required: true},
    fechaFin: {type: Date, required: true},
    //total: {type: Number, required: true},
    createdAt: {type:Date},
    updatedAt: {type:Date}
    

},
{
    timestamps: true,
    versionKey: false,
}
);

const nominas = mongoose.model('nominas', nominaSchema);

module.exports = nominas;