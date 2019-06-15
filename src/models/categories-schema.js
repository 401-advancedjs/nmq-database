'use strict';

/**
 * Controls the schema for categories
 * @module categories-schema
 */

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: {type: String, required: true},
  _id: {type: String, required: true},
});

categories.post('find', function() {
});



module.exports = mongoose.model('categories', categories);