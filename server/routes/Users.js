const { Router } = require("express");
const Users = require("../controllers/Users");

const router = Router();

router.get('/user-test', Users.test);
router.get('/', Users.getUser);
router.get('/logout', Users.Logout);
router.post('/signup', Users.createUser);

router.delete('/:_id', Users.deleteUser);

module.exports = router;
