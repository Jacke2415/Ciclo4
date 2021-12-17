const { Router } = require ("express");
const Vacaciones = require("../controllers/Vacaciones");

const router = Router();

router.get('/', Vacaciones.getVacaciones);
router.post('/', Vacaciones.createVacaciones);

module.exports = router;