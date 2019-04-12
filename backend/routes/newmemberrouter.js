const express = require('express');
const multer = require('multer');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const MemberPost = require('../models/members');

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

/**
 * API to get ALL members from the DB
*/
router.get('/api/member', checkAuth, (req, res, next) => {
  const pageSize = +req.query.pageSize;
  const currentPage = +req.query.page; //plus (+) to convert to integal
  const postQuery = MemberPost.find();
  if (currentPage && pageSize) {
    postQuery.skip(pageSize * (currentPage -1 ))
    .limit(pageSize)
  }
  postQuery.then(documents => {
      console.log(documents);
      res.status(200).json({
        message: 'message sent successfully',
        posts: documents
      });
    });
   });

   /**
    * Api to sign members
    * multer middleware used to get file/images coming from the request
    * use BCRYPT to hash the password before sending to the DB (MongoDB)
   */
   router.post('/api/signup', multer({storage: storage}).single('image'), (req, res, next) => {
     const imgUrl =  req.protocol + '://' + req.get('host');
     bcrypt.hash(req.body.password, 10)
     .then( hash =>{
      const post = new MemberPost({
        _id: req.params.ids,
        name: req.body.name,
        email: req.body.email,
        password: hash,
        telephone: req.body.telephone,
        imagePath: imgUrl + '/images/' + req.file.filename
      });
      post.save()
    .then(createdMember => {
      res.status(201).json({
        message: 'User added successfully',
        result: createdMember
     });
    }).catch(err => {
      res.status(500).json({
        error: err
      })
    });

     })
   });

   router.put('/api/member/:ids', (req, res, next) =>{
    const post = new MemberPost({
     _id: req.params.ids,
     name: req.body.name,
     email: req.body.email,
     password: req.body.password,
     telephone: req.body.telephone
    });
     MemberPost.updateOne({_id: req.params.ids}, post)
     .then(response => {
       console.log(response);
       res.status(200).json({message:'Edit successful'})
     })
    });

    router.delete('/api/member/:id', checkAuth, (req, res, next) =>{
        MemberPost.deleteOne({_id: req.params.id})
        .then(result => {
          console.log(result);
          res.status(200).json({message: "Post deleted"});
        })

     });

     /**
      * Api to login members
      * checks the login details from the request
      * compare it to that stored in the DB using the BCRYPT middleware
      * if login credentials are correct
      * log user in using the JWT middleware (jwt.sign())
      * create web token, expiry time and secret hash
     */
     router.post('/api/login', (req, res, next) => {
       let fetchMember;
      MemberPost.findOne({email: req.body.email})
      .then(member => {
        if (!member) {
          return res.status(401).json({
            message: 'Auth failed at findOne()'
          })
        }
          fetchMember = member;
       return  bcrypt.compare(req.body.password, member.password);
      })
      .then(result => {
        if (!result) {
          return res.status(401).json({
            message: 'Auth2 failed at  bcrypt.compare'
          })
        }
       // create a web token from jwt
       const token = jwt.sign({email: fetchMember.email, userId: fetchMember._id},
         'secret-this-should-be-longer',
          { expiresIn: '1h'});

          res.status(200).json({
            token: token,
            expiresIn: 3600
          })

      })
      .catch(err => {
        return res.status(401).json({
          message: 'Not successful at catch(err ' + err
        })
      });

    });


     module.exports = router;
