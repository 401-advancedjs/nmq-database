'use strict';

const uuid = require('uuid');
const categoriesSchema = require('./categories-schema.js');

class Categories {

  constructor() {
  }

  get(_id) {
    let queryObj = _id ? {_id} : {};
    return categoriesSchema.find(queryObj);
  }
  
  post(record) {
    let _id = uuid();
    record._id = _id; 
    let newRecord = new categoriesSchema(record);
    return newRecord;
  }

  put(_id, record) {
    return categoriesSchema.findByIdAndUpdate(_id, record, {new: true});
  }

  delete(_id) {
    return categoriesSchema.findByIdAndDelete(_id);
  }
}

module.exports = Categories;
