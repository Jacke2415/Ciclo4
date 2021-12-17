const { Router } = require ("express");
const User = require ('../controllers/User');

const router = Router();

router.get('/user', User.reviewUser);
router.post('/signup', User.createUser);
router.post('/signin', User.Signin);
router.get('/total', User.getSumaSalario);
module.exports = router;