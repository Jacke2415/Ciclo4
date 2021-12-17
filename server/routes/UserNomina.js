const { Router } = require ("express");
const Nomina = require ('../controllers/UserNomina');

const router = Router();

router.get('/', Nomina.getNomina);
router.post('/', Nomina.createNomina);
router.delete('/:id', Nomina.deleteNomina);

//----------------vacaciones--------------------

router.get('/', Nomina.getVacaciones);
router.post('/', Nomina.createVacaciones);



module.exports = router;