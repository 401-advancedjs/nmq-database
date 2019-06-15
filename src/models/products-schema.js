'use strict';

/**
 * Controls the schema for products
 * @module products-schema
 */

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: {type: String, required: true},
  id: {type: String, required: true},
});

products.post('find', function() {
  // console.log(this._conditions);
});

products.post('save', function() {
  // console.log(this);
});

module.exports = mongoose.model('products', products);