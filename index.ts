import { Application } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import router from './router.ts';

const app = new Application();

app.use(router.routes());

await app.listen(`:${Deno.env.get('PORT') ?? 8000}`);
