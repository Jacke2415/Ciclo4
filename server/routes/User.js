const { Router } = require ("express");
const User = require ('../controllers/User');

const router = Router();

router.post('/signup', User.createUser);
router.post('/signin', User.Signin);
router.post('/logout', User.Logout);


router.get('/user', User.reviewUser);

router.delete('/:_id', User.deleteUser);

module.exports = router;