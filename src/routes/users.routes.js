import { Router } from 'express';
import { createUser, deletetUser, getUser, updateUserPatch, updateUserPut, } from '../controllers/users.controllers.js';

const router = Router();

// Definicion de las rutas para usuarios

router.get('/', getUser);

router.post('/', createUser);

router.put('/', updateUserPut);

router.patch('/', updateUserPatch );

router.delete('/', deletetUser);


export default router;