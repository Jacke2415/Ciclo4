const { Router } = require ("express");
const User = require ('../controllers/User');
/*import student from '../models/student.js';*/

const router = Router();

router.get('/', User.getUser);
router.post('/', User.createUser);
router.delete('/:id', User.deleteUser);
router.get('/total', User.getSumaSalario);
module.exports = router;