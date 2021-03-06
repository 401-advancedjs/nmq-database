'use strict';

/**
 * Handles all other errors
 * @module error
 */

const QClient = require('@nmq/q/client');

module.exports = (err, req, res, next) => {
  let error = { error: err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(error) );
  res.end();
  QClient.publish('database', 'db-error', error);
};