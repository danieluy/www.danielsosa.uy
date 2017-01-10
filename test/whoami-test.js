var whoami = require('../src/js/whoami/main.js').invert;
var jsdom = require('mocha-jsdom');

var assert = require('assert');
describe('$main.invert()', function() {
  it('should invert the character of a given string', function() {
    assert.equal('321', whoami('123'));
  });
});
