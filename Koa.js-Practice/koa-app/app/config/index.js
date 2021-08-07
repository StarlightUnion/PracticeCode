/*
 * 配置
 */
const base = require('./base');
const develop = require('./develop');
const production = require('./production');

const env = process.env.NODE_ENV || 'develop';

const configMap = {
  develop,
  production
};

module.exports = Object.assign(base, configMap[env]);
