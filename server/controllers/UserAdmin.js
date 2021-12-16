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

