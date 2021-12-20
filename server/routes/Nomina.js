const { Router } = require ("express");
const Nomina = require ('../controllers/Nomina');
const LiquidacionMensual = require ('../controllers/LiquidacionMensual')


const router = Router();

router.get('/', Nomina.getNomina);
router.post('/', Nomina.createNomina);
router.delete('/:id', Nomina.deleteNomina);
router.get('/liquidacion', LiquidacionMensual.getLiquidacionNomina);

module.exports = router;