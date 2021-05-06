const { Router } = require('express');
import { create, get, list, edit, remove } from './methods';

const router = Router();

router.post('/', create);
router.get('/', list);
router.get('/:id', get);
router.put('/:id', edit);
router.delete('/:id', remove);

export default router;
