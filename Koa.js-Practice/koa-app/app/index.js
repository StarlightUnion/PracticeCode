const Koa = require('koa');
const compose = require('koa-compose');
const md = require('./middleware');

const app = new Koa();

const port = 9000;
const host = '0.0.0.0';

app.use(compose(md));

app.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
});
