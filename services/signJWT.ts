import { SignJWT } from 'https://deno.land/x/jose@v4.8.1/index.ts';
import { crypto } from 'https://deno.land/std@0.138.0/crypto/mod.ts';

export default async function jwt(body: {
  data: {};
  alg?: string;
  iss?: string;
  aud?: string;
  iat?: boolean;
  exp?: string;
  key?: string;
}): Promise<{
  jwt: string;
  key?: string;
}> {
  const jwt = new SignJWT(body.data);

  jwt.setProtectedHeader({ alg: body.alg ?? 'HS256' });

  if (body.iss) {
    jwt.setIssuer(body.iss);
  }

  if (body.aud) {
    jwt.setAudience(body.aud);
  }

  if (body.iat) {
    jwt.setIssuedAt();
  }

  if (body.exp) {
    jwt.setExpirationTime(body.exp);
  }

  const key = body.key ?? crypto.randomUUID();

  return {
    jwt: await jwt.sign(new TextEncoder().encode(key)),
    key: body.key ? undefined : key,
  };
}
