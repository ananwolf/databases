// exported to routes.js
var models = require('../models');
var Promise = require('bluebird');

module.exports = {
  get: function (req, res) {
    res.send(models.messages.getAll());
    console.log(data);
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.create();
  } // a function which handles posting a message to the database
};
