const { Router } = require('express');
import { create } from './methods';

const router = Router();

router.get('/', create);

export default router;
