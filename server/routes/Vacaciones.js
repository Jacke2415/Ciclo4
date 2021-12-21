const { Router } = require ("express");
const Vacaciones = require("../controllers/Vacaciones");

const router = Router();

router.get('/', Vacaciones.getVacaciones);
router.post('/', Vacaciones.createVacaciones);
router.patch('/Actualizar', Vacaciones.update_vacaciones);

module.exports = router;