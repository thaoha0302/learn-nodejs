const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const News = new Schema({
  name: { type: String, default: '', maxLength: 100, required: true },
  description: { type: String, default: '', maxLength: 250, required: true },
  image: { type: String, default: '', maxLength: 100, required: true },
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now},
}, {
  timestamps: true,
});

const NewsModel = mongoose.model('News', News);

module.exports = NewsModel