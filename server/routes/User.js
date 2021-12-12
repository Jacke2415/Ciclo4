const { Router } = require ("express");
const User = require ('../controllers/User');
/*import student from '../models/student.js';*/

const router = Router();

router.get('/', User.getUser);
router.post('/', User.createUser);
router.delete('/:cedula', User.deleteUser);

module.exports = router;