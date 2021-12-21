const { Router } = require ("express");
const Permisos = require("../controllers/Permisos");

const router = Router();

router.get('/', Permisos.getPermisos);
router.post('/', Permisos.createPermisos);

module.exports = router;