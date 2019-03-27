const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require('./routes/postsrouter');




const app = express();
// password Mongo: 7ahZfDuCFfTIhvZI

mongoose.connect('mongodb+srv://olootu_admin:Olootu6831@sugb-nyxbs.mongodb.net/sagamunion?retryWrites=true', { useNewUrlParser: true })
.then((result) => {
  console.log('Connected to database');
}).catch(() => {
  console.log('Connection failed');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH,PUT, DELETE, OPTIONS');
  next();
});

app.use(postRoutes);

module.exports = app;
