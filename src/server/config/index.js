/* eslint-disable import/no-dynamic-require */
if (process.env.BROWSER) {
  throw new Error(
    'Do not import `config.js` from inside the client-side code.',
  );
}

const ENV = process.env.NODE_ENV;
const config = require(`./${ENV}`);

module.exports = config;
