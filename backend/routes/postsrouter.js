const express = require('express');
const MemberPost = require('../models/post');

const router = express.Router();

router.get('/api/posts',(req, res, next) => {
    MemberPost.find()
    .then(documents => {
      console.log(documents);
      res.status(200).json({
        message: 'message sent successfully',
        posts: documents
      });
    });
   });
  
   router.post('/api/posts', (req, res, next) => {
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
  
   router.put('/api/posts/:ids', (req, res, next) =>{
    const post = new MemberPost({
     _id: req.params.ids,
      name: req.body.name,
      email: req.body.email,
      telephone: req.body.telephone
    });
     MemberPost.updateOne({_id: req.params.ids}, post)
     .then(response => {
       console.log(response);
       res.status(200).json({message:'Edit successful'})
     })
    });

    router.delete('/api/posts/:id', (req, res, next) =>{
        MemberPost.deleteOne({_id: req.params.id})
        .then(result => {
          console.log(result);
          res.status(200).json({message: "Post deleted"});
        })
     
     })

     module.exports = router;
