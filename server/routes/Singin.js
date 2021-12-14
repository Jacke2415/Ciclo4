const { Router } = require ("express");
const User = require ('../controllers/User');
/*import student from '../models/student.js';*/

const router = Router();

router.post('/', User.singin);


module.exports = router;