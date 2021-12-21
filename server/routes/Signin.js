const { Router } = require ("express");
const Signin = require ('../controllers/Signin.js');

const router = Router();

router.post('/signin', Signin.Signin);
router.get('/user', Signin.reviewUser);

module.exports = router;