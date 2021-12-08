import express from 'express';
import { getUser, createUser, deleteUser } from '../controllers/User';
/*import student from '../models/student.js';*/

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;