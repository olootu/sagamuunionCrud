const mongoose = require('mongoose');

const membersPostSchema = mongoose.Schema(
  {
    name:{ type:String, required: true},
    email: { type:String, required: true},
    telephone: { type:String},
    imagePath: {type: String}
  }
);

module.exports = mongoose.model('Member', membersPostSchema);
