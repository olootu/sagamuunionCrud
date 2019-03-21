const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Members = new Schema({
 name: {
    type: String
  },
  email: {
    type: String
  },
  telephone: {
    type: Number
  },
  membership: {
    status:{type:  String},
    dateJoined:{type:  String},
    membershipNo:{type:  Number},
  }
},{
    collection: 'members'
});

module.exports = mongoose.model('Members', Members);
