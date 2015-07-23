'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String
});

module.exports = mongoose.model('Category', CategorySchema);