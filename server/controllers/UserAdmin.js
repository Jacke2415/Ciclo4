const UserData = require("../models/User");

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
}
  