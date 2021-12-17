const { Router } = require ("express");
const User = require ('../controllers/User');

const router = Router();

router.post('/signup', User.createUser);
router.post('/signin', User.Signin);


module.exports = router;