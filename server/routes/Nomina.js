const { Router } = require ("express");
const Nomina = require ('../controllers/Nomina');

const router = Router();

router.get('/', Nomina.getNomina);
router.post('/', Nomina.createNominaMensual);
router.delete('/:id', Nomina.deleteNomina);
router.get('/liquidacion', Nomina.getLiquidacionNomina);

module.exports = router;