'use strict';

/*!
 * import(s)
 */

var Collection = (typeof window !== "undefined" && window !== null)
  ? require('fendjs-collection') : require('..');
var expect = require('expect.js');


/*!
 * test(s)
 */
describe('Collection([models])', function () {
  describe('default', function () {
    var col;
    before(function (done) {
      col = new Collection();
      done();
    });

    it('collection length expect to equal 0', function () {
      expect(col.length()).to.eql(0);
    });

    it('Collection at(0) expect to be undefined', function () {
      expect(col.at(0)).to.be.undefined;
    });
  });

  describe('2 models', function () {
    var col;
    var models = ['user1', 'user2'];
    before(function (done) {
      col = new Collection(models);
      done();
    });

    it('collection length expect to equal 2', function () {
      expect(col.length()).to.eql(2);
    });

    it('Collection at(0) expect to be models[0]', function () {
      expect(col.at(0)).to.eql(models[0])
    });

    it('Collection at(1) expect to be models[1]', function () {
      expect(col.at(1)).to.eql(models[1])
    });
    
    it('Collection at(2) expect to be undefined', function () {
      expect(col.at(2)).to.be.undefined;
    });
  });
});

describe('Collection#length', function () {
  it('expect to eql models length', function () {
    var models = ['user1'];
    var col = new Collection(models);
    expect(col.length()).to.eql(models.length);
  });
});

describe('Collection#push', function () {
  var col = new Collection();
  it('expect to not throw error', function () {
    var fn = function () {
      col.push('user1');
    };
    expect(fn).to.not.throwError();
  });

  it('collection length expect to equal 1', function () {
    expect(col.length()).to.eql(1);
  });

  it('Collection at(0) expect to be "user1"', function () {
    expect(col.at(0)).to.eql('user1');
  });
});
