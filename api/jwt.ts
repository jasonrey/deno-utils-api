import { Router } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import signJWT from '../services/signJWT.ts';

const router = new Router();

/**
 * @body {Object} data - JWT body
 * @body {string} key - JWT key
 * @body {string} [alg] - Algorithm value, defaults to HS256
 * @body {string} [iss] - Issuer value
 * @body {string|string[]} [aud] - Audience value
 * @body {boolean} [iat] - True to set issued at value
 * @body {string} [exp] - Expiration value, e.g. 1h, 2d
 */
router.post('/:alg?', async (ctx) => {
  try {
    const alg = (ctx.params.alg ?? 'HS256').toUpperCase();
    const body = await ctx.request.body().value;
    const result = await signJWT({
      ...body,
      alg,
    });
    ctx.response.body = result;
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: err.message,
    };
  }
});

export default router;
