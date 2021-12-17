const { Router } = require("express");
const UserAdmin = require("../controllers/UserAdmin");

const router = Router();

router.get('/user-test', UserAdmin.test);
router.get('/users', UserAdmin.getUser);
router.get('/logout', UserAdmin.Logout);

router.delete('/:_id', UserAdmin.deleteUser);

module.exports = router;
