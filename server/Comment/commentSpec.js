// Comment Spec
// -----------
//
// Integration testing for Comment routes and database controller.

var request = require('supertest');
var expect = require('chai').expect;
var app = require('../serverSetup.js');
var Comment = require('../config/db_models.js').Comment;

var testComments = require('../config/specTestData.js').testComments;


module.exports = function(callback) {

  describe('----- Comment Router/Controller tests -----', function() {

    it('sdfsdfds', function(done) {
      done();
    })

  });

  callback();

};