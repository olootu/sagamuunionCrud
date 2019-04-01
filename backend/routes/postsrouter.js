const express = require('express');
const multer = require('multer');
const router = express.Router();

const MemberPost = require('../models/post');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg'
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
     cb(null, 'backend/images');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }
})


router.get('/api/posts',(req, res, next) => {
  const pageSize = req.query.pageSize;
  const currentPage = req.query.page;
  const postQuery = MemberPost.find();
  if (currentPage && pageSize) {
    postQuery.skip(pageSize * (currentPage -1 ))
  }
  postQuery.then(documents => {
      console.log(documents);
      res.status(200).json({
        message: 'message sent successfully',
        posts: documents
      });
    });
   });

   router.post('/api/posts', multer({storage: storage}).single('image'), (req, res, next) => {
     const imgUrl =  req.protocol + '://' + req.get('host');
    const post = new MemberPost({
      name: req.body.name,
      email: req.body.email,
      telephone: req.body.telephone,
      imagePath: imgUrl + '/images/' + req.file.filename
    });
    post.save()
    .then(createdPost => {
      res.status(201).json({
        message: 'Post added successfully',
        // postId: createdPost.id
        post: createdPost
     });
    });
    console.log(req.body);
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
