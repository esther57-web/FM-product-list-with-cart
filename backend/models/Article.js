const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Article', articleSchema);
