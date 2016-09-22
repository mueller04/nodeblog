var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  title: String,
  body: String,
});
mongoose.model('Article', articleSchema);
