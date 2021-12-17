const UserData = require("../models/User");
const jwt = require("jsonwebtoken");

// create json web token
const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.Signin = async (req, res) => {
  const { email, password } = req.body;
    
  try {
    const user = await UserData.signin(email, password);
    const userAll = await UserData.findOne({_id : user._id})
    const rol = await userAll.tipo_usuario
    
    const token = createToken(user._id);
    
    res
      .cookie('access_token', token, { httpOnly: true, maxAge: maxAge * 1000 })
      .status(200)
      .json({ message: 'su signin ha sido exitoso!!!', user, rol} );
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.reviewUser = (req, res) => {
  console.log("Revisar Usuario");
  const token = req.cookies.access_token;
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log("error1");
        res.status(401).json({ user: null });
      } else {
        console.log('hecho!!')
        let user = await UserData.findById(decodedToken.id);
        res
          .status(200)
          .json({ user });
      }
    });
  } else {
    console.log("error2");
    res
      .status(401)
      .json({ user: null });
  }
};

module.exports.getSumaSalario = async (req, res) => {
    try {
        const allUsersActive = await UserData.find({estado:"activo"});
        
        const total =  allUsersActive[0] ;
        console.log(total);
        res.status(200).json(total);

        /* db.users.aggregate([
            {$match:{$or:[{estado:"activo"},{estado:'desactivado'}]}},
            //{$match:[{estado:'activo'}]},
            {$group:{_id:'$estado', total:{$sum:'$salario'}}}
            ]) */
        //total:{$sum:'$salario'}
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
