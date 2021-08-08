/*
 * 中间件-解析参数
 */
const koaBody = require('koa-bodyparser');
const cors = require('@koa/cors');
const router = require('../router');
const formidable = require('./formidable');
const response = require('./response');
const error = require('./error');
const log = require('./log');

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
 * 统一返回格式
 */
const mdResHandler = response();

/**
 * 错误处理
 */
const mdErrorHandler = error();

/**
 * 跨域处理
 */
const mdCors = cors({
  origin: '*',
  credentials: true,
  allowMethods: [ 'GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH' ]
});

/**
 * 记录请求日志
 */
const mdLogger = log();

/**
 * 处理路由
 */
const mdRoute = router.routes();
const mdRouterAllowed = router.allowedMethods();

module.exports = [
  mdFormidable,
  mdKoaBody,
  mdCors,
  mdLogger,
  mdResHandler,
  mdErrorHandler,
  mdRoute,
  mdRouterAllowed
];
