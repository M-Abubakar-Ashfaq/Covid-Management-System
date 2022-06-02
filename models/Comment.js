const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }

});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
