/*
 * 路由列表
 */
const { test } = require('../controllers');
const { scmTest } = require('../schema/index');

const routes = [
  {
    method: 'get',
    path: '/test',
    controller: test.list,
    valid: scmTest.list
  }
];

module.exports = routes;
