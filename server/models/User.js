const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    tipo_usuario: {type: Number, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    tipo_identificacion: {type: String, required: true},
    cedula: {type: String, required: true},
    password: {type: String, required: true},
    fecha_nacimiento: {type: Date, required: true},
    sexo: {type: String, required: true},
    telefono: {type: String, required: true},
    direccion: {type: String, required: true},
    email: {type: String, required: true},
    fecha_ingreso: {type: String, required: true},
    tipo_contrato: {type: String, required: true},
    salario: {type: Number, required: true},
    cargo: {type: String, required: true},
    estado: {type: String, required: true},

});

const users = mongoose.model('users', userSchema);

module.exports = users;