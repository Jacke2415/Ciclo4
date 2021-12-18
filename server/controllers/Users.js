const UserData = require('../models/Users');
const jwt = require('jsonwebtoken');

module.exports.test = (req, res) => {
  console.log('test');
  const { id } = res.locals.user;
  console.log(id);
  // const token = req.cookies.jwt;
  // console.log(token);
  res.send('Texto de prueba recibido desde la API. Id de usuario: ' + id);
};
module.exports.editUser = async (req, res) => {
  try {
    const data = req.body.UserData;
    const filtro = req.body.user;
    
    let userupdate = await UserData.findOneAndUpdate(filtro, data);
    res.status(200).json({
      message: 'Usuario Actualizado',
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getUser = async (req, res) => {
  try {
    const allUsers = await UserData.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.createUser = async (req, res) => {
  const newUser = new UserData({
    tipo_usuario: 2,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    tipo_identificacion: req.body.tipo_identificacion,
    cedula: req.body.cedula,
    password: req.body.password,
    fecha_nacimiento: req.body.fecha_nacimiento,
    sexo: 'Femenino', // Arreglar cuando este listo el button
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    email: req.body.email,
    fecha_ingreso: req.body.fecha_ingreso,
    tipo_contrato: req.body.tipo_contrato,
    salario: req.body.salario,
    cargo: req.body.cargo,
    estado: 'activo',
  });
  const email = await UserData.findOne({ email: newUser.email });
  if (email) {
    return res
      .status(400)
      .json({ email: 'El email ya se encuentra registrado', password: '' });
  }
  try {
    const user = await UserData.create(newUser);
    console.log('Creamos un usuario nuevo!!');
    res.status(200).json({ message: 'Su registro ha sido exitoso!!', user });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.deleteUser = async (req, res) => {
  const id = req.params._id;
  /* const { id } = res.locals.user; */
  try {
    await UserData.findByIdAndRemove(id).exec();
    res.send('Succesfully Deleted!');
  } catch (error) {
    console.log(error);
  }
};

module.exports.Logout = async (req, res) => {
  res
    .clearCookie('access_token')
    .status(200)
    .json({ message: 'successfully logged out' });
};
