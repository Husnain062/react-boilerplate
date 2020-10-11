const ENV = process.env.NODE_ENV;
// eslint-disable-next-line import/no-dynamic-require
const config = require(`./${ENV}`);

module.exports = config;
