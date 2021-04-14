const Koa = require('koa')
const next = require('next')
const Router = require('@koa/router')
const json = require('koa-json');
const dotenv = require('dotenv');
dotenv.config();
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const session = require('koa-session');
const koaBody = require('koa-body');
const serve = require('koa-static');

let mockDB = [];

(async () => {
  try {
    await app.prepare();
    const server = new Koa();
    server.use(json())
    
  
    const router = new Router()
  
    router.get('/a', async (ctx) => {
      await app.render(ctx.req, ctx.res, '/a', ctx.query)
      ctx.respond = false
    })

    // API ROUTES
    router.get('/api/banners', koaBody(), async (ctx) => {
      ctx.body = {
        status: 200,
        message: 'All The Banners',
        data: mockDB
      }
    })
    
    router.post('/api/banners', koaBody(), async (ctx) => {
      mockDB.unshift(ctx.request.body)
      console.log(ctx.request.body)
      ctx.body = {
        status: 200,
        message: 'Submited banner data',
        data: mockDB
      }
    })
  
    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
    })
  
    server.use(router.routes())
  
    server.use(serve(__dirname + '/public'));

    server.use(async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
      return
    });
  
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  } catch (e) {
      console.error(e);
      process.exit();
  }
})();