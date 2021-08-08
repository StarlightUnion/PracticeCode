/*
 * 路由
 */
const KoaRouter = require('koa-router');
const routeList = require('./routes');
const paramValidator = require('../middlewares/paramValidator');

const router = new KoaRouter();

routeList.forEach(item => {
  const { method, path, controller, valid } = item;
  router[method](path, paramValidator(valid), controller);
});

module.exports = router;
