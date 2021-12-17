const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vacacionesSchema = new Schema({
    cedula: {type: String, required: true},
    fechaInicial: {type: Date, required: true},
    fechaFinal: {type: Date, required: true},
    estado: {type: String, required: true},
   
});

const vacaciones = mongoose.model('vacaciones', vacacionesSchema);

module.exports = vacaciones;