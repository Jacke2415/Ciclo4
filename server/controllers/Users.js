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
    const data = req.body.userData;
    const filtro = req.body.user;
    console.log(req.body)
    
    let userupdate = await UserData.findOneAndUpdate(filtro, data);
    res
      .status(200)
      .json({ message: 'Usuario Actualizado', userupdate  });
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
module.exports.getUserID = async (req, res) => {
  try {
    const params = req.body.parametros;
    console.log(params);
    const data_search = await UserData.find(params);
    res.status(200).json(data_search);
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
    salario: parseFloat(req.body.salario),
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
  console.log('entramos a borrar')
  const id = req.params._id;
  /* const { id } = res.locals.user; */
  try {
    await UserData.findByIdAndRemove(id).exec();
    res.status(201).json({message: 'Succesfully Deleted!'});
    console.log(`usuario ${id} borrado`)
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.Logout = async (req, res) => {
  console.log('estamos limpiando la cookie')
  res
    .clearCookie('access_token')
    .status(200)
    .json({ message: 'successfully logged out' });
};

module.exports.getSumaSalario = async (req, res) => {
  try {  
    const allSalarios = await
    UserData.aggregate([      
        {$group:{_id:{estado:'$estado'}, total:{$sum:'$salario'}}}
      ])
    console.log(allSalarios)
    res.status(200).json(allSalarios);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
