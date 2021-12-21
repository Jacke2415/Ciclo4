const PermisosData = require("../models/Permisos");

module.exports.getPermisos = async (req, res) => {
    try {
        const PermisosPendientes = await PermisosData.find();
        res.status(200).json(PermisosPendientes);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports.createPermisos = async (req, res) => {
    const newPermisos = new PermisosData ({
        cedula: req.body.cedula,
        tipoPermiso: req.body.tipoPermiso,
        asunto: req.body.asunto,
        fechaInicial: req.body.fechaInicial,
        fechaFinal: req.body.fechaFinal,
        diasPermiso: req.body.diasPermiso,
        estado: 'Pendiente',
            
    });
    try {
        await newPermisos.save();
        res.status(201).json(newPermisos);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

module.exports.getPermisoCedula = async (req, res) => {
    try {
      const params = req.body.parametros;
      console.log(params);
      const data_search = await UserData.find(params);
      res.status(200).json(data_search);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

module.exports.update_permis = (req, res) => {
    const { estado,  cedula } = req.body;
  

    PermisosData.updateOne(
      { cedula },
      {
        $set: {
          estado,
          
        },
      }
    )
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };
