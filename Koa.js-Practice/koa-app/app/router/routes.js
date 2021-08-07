/*
 * 路由列表
 */
const { test } = require('../controllers');

const routes = [
  {
    method: 'get',
    path: '/test',
    controller: test.list
  }
];

module.exports = routes;
