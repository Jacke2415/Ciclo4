const UserData = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports.test = (req, res) => {
    console.log("test");
    const { id } = res.locals.user;
    console.log(id);
    // const token = req.cookies.jwt;
    // console.log(token);
    res.send("Texto de prueba recibido desde la API. Id de usuario: " + id);
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

module.exports.getUser = async (req, res) => {
  try {
      const allUsers = await UserData.find();
      res.status(200).json(allUsers);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};

module.exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    /* const { id } = res.locals.user; */
    try {
        await UserData.findByIdAndRemove(id).exec();
        res.send('Succesfully Deleted!')
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

