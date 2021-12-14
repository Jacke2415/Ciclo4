const { Router } = require("express");
const User = require("../controllers/UserAdmin");

const router = Router();

router.get('/user-test', User.test);
router.get('/users', User.getUser);
/* router.get('/user', User.reviewUser); */


module.exports = router;
