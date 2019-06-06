'use strict';

const uuid = require('uuid/v4');

const productsSchema = require('./products-schema');

class Products {

  constructor() {
    this.database = [];
  }

  get(id) {
    let queryObj = id ? {id} : {};
    return productsSchema.find(queryObj);
  }
  
  post(entry) {
    let id = uuid();
    entry.id = id;
    let newEntry = new productsSchema(entry);
    return newEntry.save();
  }

  put(id, entry) {
    return productsSchema.findByIdAndUpdate(id, entry, {new: true});
  }

  delete(id) {
    return productsSchema.findByIdAndDelete(id);
  }

  sanitize(entry) {
  }

}

/*
get(_id) {
  let queryObj = _id ? {_id} : {};
  return categoriesSchema.find(queryObj);
}

post(record) {
  let _id = uuid();
  record._id = _id; 
  let newRecord = new categoriesSchema(record);
  return newRecord.save();
}

put(_id, record) {
  return categoriesSchema.findByIdAndUpdate(_id, record, {new: true});
}

delete(_id) {
  return categoriesSchema.findByIdAndDelete(_id);
}
*/

module.exports = Products;
