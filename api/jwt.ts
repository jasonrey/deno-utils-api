import { Context } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import signJWT from '../services/signJWT.ts';

/**
 * @body {Object} data - JWT body
 * @body {string} key - JWT key
 * @body {string} [alg] - Algorithm value, defaults to HS256
 * @body {string} [iss] - Issuer value
 * @body {string|string[]} [aud] - Audience value
 * @body {boolean} [iat] - True to set issued at value
 * @body {string} [exp] - Expiration value, e.g. 1h, 2d
 */
export async function jwt(ctx: Context) {
  try {
    const body = await ctx.request.body().value;
    const result = await signJWT(body);
    ctx.response.body = result;
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: err.message,
    };
  }
}

export async function hs256(ctx: Context) {
  try {
    const body = await ctx.request.body().value;
    body.alg = 'HS256';
    const result = await signJWT(body);
    ctx.response.body = result;
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: err.message,
    };
  }
}
