const { Router } = require ("express");
const Signin = require ('../controllers/Signin.js');

const router = Router();

router.post('/signin', Signin.Signin);
router.get('/user', Signin.reviewUser);
router.get('/total', Signin.getSumaSalario);
module.exports = router;