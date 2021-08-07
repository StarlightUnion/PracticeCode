/*
 * 中间件-解析参数
 */
const koaBody = require('koa-bodyparser');
const router = require('../router');
const formidable = require('./formidable');

const mdFormidable = formidable();

/**
 * 参数解析
 */
const mdKoaBody = koaBody({
  enableTypes: [ 'json', 'form', 'text', 'xml' ],
  formLimit: '56kb',
  jsonLimit: '1mb',
  textLimit: '1mb',
  xmlLimit: '1mb',
  strict: true
});

/**
 * 处理路由
 */
const mdRoute = router.routes();
const mdRouterAllowed = router.allowedMethods();

module.exports = [
  mdFormidable,
  mdKoaBody,
  mdRoute,
  mdRouterAllowed
];
