import { Router } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import jwt from './api/jwt.ts';
import ping from './api/ping.ts';

const router = new Router();

router.use('/jwt', jwt.routes());
router.use('/ping', ping.routes());

export default router;
