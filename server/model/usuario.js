const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nombre: {type: String, required: true},
    fecha_nacimiento: {type: Date, required: true},
    cedula: {type: String, required: true},
    telefono: {type: String, required: true},
    sexo: {type: String, required: true},
    estado: {type: String, required: true},

});

module.exports = mongoose.model('Usuario', UsuarioSchema);