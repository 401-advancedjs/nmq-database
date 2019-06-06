'use strict';

const Categories = require('../src/models/categories');

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Categories Model', () => {
  it('can post() a new category', (done) => {
    const test = new Categories();
    test.post({name: 'Melissa'}).then(data => {
      expect(data.name).toEqual('Melissa');
      done();
    }).catch(err => expect(err).toBeUndefined());
  });

  it('will throw an error if it can not post() a new category', (done) => {
    const test = new Categories();
    test.post({}).then(data => {
      expect(data).toBeUndefined();
    }).catch(err => {
      expect(err).toBeDefined();
      done();
    });
  });

  it('can get() a category', (done) => {
    const test = new Categories();
    return test.post({name: 'getting the test'}).then(data => {
      return test.get(data._id).then(result => {
        expect(result[0].name).toEqual('getting the test');
        done();
      }).catch(err => expect(err).toBeUndefined());
    }).catch(error => expect(error).toBeUndefined());
  });

  it('will throw an error if it can not get() a category', (done) => {
    const test = new Categories();
    test.get('asdf').then(data => {
      expect(data).toBeUndefined();
      done();
    }).catch(err => {
      expect(err).toBeDefined();
      done();
    });
  });

  it('can put() a category', (done) => {
    const test = new Categories();
    return test.post({name: 'testing the put'}).then(data => {
      return test.get(data._id).then(info => {
        return test.put(info[0]._id, {name: 'updating the put'}).then(result => {
          expect(result.name).toEqual('updating the put');
          done();
        }).catch(e => expect(e).toBeUndefined());
      }).catch(error => expect(error).toBeUndefined());
    }).catch(err => expect(err).toBeUndefined());
  });

  it('will throw an error if it cannot put() a category', () => {
    const test = new Categories();
    return test.post({name: 'testing the put error'}).then(data => {
      return test.get(data._id).then(info => {
        return test.put('not an id', {}).then(result => {
          expect(result).toBeUndefined();
        }).catch(e => expect(e).toBeDefined());
      }).catch(error => expect(error).toBeUndefined());
    }).catch(err => expect(err).toBeUndefined());
  });

  it('can delete() a category', () => {
    const test = new Categories();
    return test.post({name: 'testing delete'}).then(data => {
      return test.get(data._id).then(info => {
        return test.delete(info[0]._id).then(result => {
          expect(result.name).toEqual('testing delete');
        }).catch(error => expect(error).toBeUndefined());
      }).catch(e => expect(e).toBeUndefined());
    }).catch(err => expect(err).toBeUndefined());  
  });

  it('will throw an error if it cannot delete a category', () => {
    const test = new Categories();
    return test.post({name: 'testing the put error'}).then(data => {
      return test.get(data._id).then(info => {
        return test.delete('not an id').then(result => {
          expect(result).toBeUndefined();
        }).catch(e => expect(e).toBeDefined());
      }).catch(error => expect(error).toBeUndefined());
    }).catch(err => expect(err).toBeUndefined());
  });

});