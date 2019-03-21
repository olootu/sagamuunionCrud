const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const MemberPost = require('./models/post');

const app = express();
// password Mongo: 7ahZfDuCFfTIhvZI

mongoose.connect('mongodb+srv://olootu_admin:Olootu6831@sugb-nyxbs.mongodb.net/sagamunion?retryWrites=true')
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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new MemberPost({
    name: req.body.name,
    email: req.body.email,
    telephone: req.body.telephone
  });
  post.save()
  .then(createdPost => {
    res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost.id
   });
  });

 });



app.get('/api/posts',(req, res, next) => {
  MemberPost.find()
  .then(documents => {
    console.log(documents);
    res.status(200).json({
      message: 'message sent successfully',
      posts: documents
    });
  });
 });

 app.delete('/api/posts/:id', (req, res, next) =>{
   MemberPost.deleteOne({_id: req.params.id})
   .then(result => {
     console.log(result);
     res.status(200).json({message: "Post deleted"});
   })

})

module.exports = app;
