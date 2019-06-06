'use strict';

const uuid = require('uuid');
const categoriesSchema = require('./categories-schema.js');

class Categories {
  constructor() {
  }

  get(_id) {
    let queryObj = _id ? {_id} : {};
    let result = categoriesSchema.find(queryObj);
    return result;
  }
  
  post(record) {
    let _id = uuid();
    record._id = _id; 
    let newRecord = new categoriesSchema(record);
    return newRecord.save();
  }

  put(_id, record) {
    let result = categoriesSchema.findByIdAndUpdate(_id, record, {new: true});
    return result;
  }

  delete(_id) {
    return categoriesSchema.findByIdAndDelete(_id);
  }
}

module.exports = Categories;
