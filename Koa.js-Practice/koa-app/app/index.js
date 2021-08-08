const Koa = require('koa');
const compose = require('koa-compose');
const md = require('./middlewares');
const config = require('./config');
const utils = require('./common/utils');

const app = new Koa();

const port = 9000;
const host = '0.0.0.0';

app.context.config = config;
app.context.utils = utils;

app.use(compose(md));

app.on('error', (err, ctx) => {
  if (ctx) {
    ctx.body = {
      code: 9999,
      message: `程序运行时报错：${err.message}`
    };
  }
});

app.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});
