'use strict';

/**
 * Contains product class
 * @module products
 */

const uuid = require('uuid/v4');
const productsSchema = require('./products-schema');


/**
 * Creates new products
 * @class Products
 */
class Products {

  constructor() {
    this.database = [];
  }
  /**
   * Method - adds new product to database
   * @param {string} record 
   */
  get(id) {
    let queryObj = id ? {id} : {};
    return productsSchema.find(queryObj);
  }
  /**
   * Method - adds new product to database
   * @param {string} record 
   */
  post(entry) {
    let id = uuid();
    entry.id = id;
    let newEntry = new productsSchema(entry);
    return newEntry.save();
  }
  /**
   * Method - updates existing product in the database
   * @param {string} _id 
   * @param {string} record 
   */
  put(id, entry) {
    return productsSchema.findByIdAndUpdate(id, entry, {new: true});
  }
  /**
   * Method - deletes product from database
   * @param {string} _id 
   */
  delete(id) {
    return productsSchema.findByIdAndDelete(id);
  }

}

module.exports = Products;
