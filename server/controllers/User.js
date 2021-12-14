const UserData = require("../models/User");
const jwt = require("jsonwebtoken");

// create json web token
const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
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
    sexo: req.body.sexo,
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
      .json({email: 'El email ya se encuentra registrado', password: ''});
  };         
  try {
    const user = await UserData.create(newUser);
    console.log(user)    
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    console.log('Su registro ha sido exitoso!!')
    res.status(201).json(newUser);
  } catch (error) {
      res.status(409).json({ message: error.message});
    }
  };

        
module.exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
      await UserData.findByIdAndRemove(id).exec();
      res.send('Succesfully Deleted!')
  } catch (error) {
      console.log(error);
  }
};

module.exports.Signin = async (req, res) => {
  const { email, password } = req.body;
    
  try {
    const user = await UserData.signin(email, password);
    const token = createToken(user._id);
    console.log(token);
    res.cookie('access_token', token, { httpOnly: true, maxAge: maxAge * 1000 });
    
    res.status(200).json({ id: user._id, email });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.Logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.send("postCerrarSesion");
};

module.exports.reviewUser = (req, res) => {
  console.log("Revisar Usuario");
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log("error1");
        res.status(401).json({ user: null });
      } else {
        let user = await UserData.findById(decodedToken.id);
        res.status(200).json({ user: { id: user._id, email: user.email } });
      }
    });
  } else {
    console.log("error2");
    res.status(401).json({ user: null });
  }
};