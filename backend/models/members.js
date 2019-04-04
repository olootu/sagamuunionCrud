const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const membersPostSchema = mongoose.Schema(
  {
    name:{ type:String, required: true},
    email: { type:String, required: true},
    // email: { type:String, required: true, unique: true},
    password: { type:String, required: true},
    telephone: { type:String},
    imagePath: {type: String}
  }
);

membersPostSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Member', membersPostSchema);
