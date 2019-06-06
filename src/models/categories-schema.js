'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: {type: String, required: true},
  _id: {type: String, required: true},
});

categories.post('find', function() {
  // console.log(this._conditions);
});



module.exports = mongoose.model('categories', categories);