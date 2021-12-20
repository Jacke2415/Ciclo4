const { Router } = require("express");
const Users = require("../controllers/Users");

const router = Router();

router.get('/user-test', Users.test);
router.get('/', Users.getUser);
router.get('/logout', Users.Logout);
router.post('/signup', Users.createUser);
router.post('/edit', Users.editUser);
router.post('/userID', Users.getUserID);

router.delete('/:_id', Users.deleteUser);
router.get('/cedula/:cedula', Users.getUserOne);

module.exports = router;
