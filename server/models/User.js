const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

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
    salario: {type: String, required: true},
    cargo: {type: String, required: true},
    estado: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false,
    }
    );

userSchema.methods.encryptPassword = async (password) => {
    console.log(password);
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
const users = mongoose.model('users', userSchema);

module.exports = users;