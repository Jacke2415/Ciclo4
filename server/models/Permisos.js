const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const permisosSchema = new Schema({
    cedula: {type: String, required: true},
    tipoPermiso: {type: String, required: true},
    asunto: {type: String, required: true},
    fechaInicial: {type: Date, required: true},
    fechaFinal: {type: Date, required: true},
    diasPermiso: {type: Number, required: true},
    estado: {type: String, required: true},
   
},
{
    timestamps: true,
    versionKey: false,
}
);

const permisos = mongoose.model('permisos', permisosSchema);

module.exports = permisos;