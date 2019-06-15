'use strict';

/**
 * Includes Categories Class
 * @module categories
 */

const uuid = require('uuid');
const categoriesSchema = require('./categories-schema.js');


/**
 * Creates new categories
 * @class Categories
 */
class Categories {
  constructor() {
  }
  /**
   * Method - retrieves data from database using id
   * @param {string} _id 
   */
  get(_id) {
    let queryObj = _id ? {_id} : {};
    let result = categoriesSchema.find(queryObj);
    return result;
  }
  
  /**
   * Method - adds new category to database
   * @param {string} record 
   */
  post(record) {
    let _id = uuid();
    record._id = _id; 
    let newRecord = new categoriesSchema(record);
    return newRecord.save();
  }

  /**
   * Method - updates existing category in the database
   * @param {string} _id 
   * @param {string} record 
   */
  put(_id, record) {
    let result = categoriesSchema.findByIdAndUpdate(_id, record, {new: true});
    return result;
  }

  /**
   * Method - deletes category from database
   * @param {string} _id 
   */
  delete(_id) {
    return categoriesSchema.findByIdAndDelete(_id);
  }
}

module.exports = Categories;
