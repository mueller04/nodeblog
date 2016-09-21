var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  Title: String,
  Body: String,
});
mongoose.model('Article', articleSchema);