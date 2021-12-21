const { Router } = require ("express");
const Permisos = require("../controllers/Permisos");

const router = Router();

router.get('/', Permisos.getPermisos);
router.post('/', Permisos.createPermisos);
router.get('/Cedula', Permisos.getPermisoCedula);
router.patch('/Actualizar', Permisos.update_permis);

module.exports = router;