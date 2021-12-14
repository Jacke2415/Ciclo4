const mongoose = require('mongoose');
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    tipo_usuario: {type: Number, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    tipo_identificacion: {type: String, required: true},
    cedula: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    fecha_nacimiento: {type: Date, required: true},
    sexo: {type: String, required: true},
    telefono: {type: String, required: true},
    direccion: {type: String, required: true},
    email: {type: String, required: true, unique: true},
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

// fire a function before doc saved to db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.signin = async function (email, password) {
  const user = await users.findOne({ email: email });
  if (user) {
    const autorizado = await bcrypt.compare(password, user.password);
    if (autorizado) {
      console.log(user._id);
      return user._id;
    } else {
      throw Error("login: La contraseña es incorrecta.");
    }
  } else {
    throw Error("login: El correo ingresado no existe.");
  }
};

/* userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
 */
const users = mongoose.model('users', userSchema);

module.exports = users;