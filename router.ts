import { Router } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import { jwt, hs256 } from './api/jwt.ts';

const router = new Router();

router.post('/jwt', jwt);
router.post('/jwt/hs256', hs256);

export default router;
