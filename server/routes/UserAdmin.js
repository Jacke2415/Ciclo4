const { Router } = require("express");
const User = require("../controllers/UserAdmin");

const router = Router();

router.get('/user-test', User.test);
/* router.get('/user', User.reviewUser); */


module.exports = router;
