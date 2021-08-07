/*
 * 路由
 */
const KoaRouter = require('koa-router');
const routeList = require('./routes');

const router = new KoaRouter();

routeList.forEach(item => {
  const { method, path, controller } = item;
  router[method](path, controller);
});

module.exports = router;
