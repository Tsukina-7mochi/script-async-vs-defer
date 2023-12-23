import { Hono } from 'https://deno.land/x/hono@v3.11.9/mod.ts';
import { serveStatic } from 'https://deno.land/x/hono@v3.11.9/middleware.ts';

const app = new Hono();

// downloading script1.js takes longer time
app.use('/script1.js', async (_, next) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await next();
});
app.use('/*', serveStatic({
  root: './public',
  rewriteRequestPath: (path) => path.replace(/^\/public/, '/public'),
}));

const port = 8080;
Deno.serve({ port }, app.fetch);
