const express = require('express');
const app = express();
const membersRoutes = express.Router();

// Require Business model in our routes module
let Members = require('./Members');

// Defined store route
membersRoutes.route('/add').post(function (req, res) {
  const members = new Members(req.body);
  members.save()
    .then(member => {
      res.status(200).json({'members': 'member is added successfully'});
    })
    .catch(err => {
    res.status(400).send('unable to save to database');
    });
});

// Defined get data(index or listing) route
membersRoutes.route('/').get(function (req, res) {
    Members.find(function (err, member) {
    if(err) {
      console.log(err);
    } else {
      res.json(member);
    }
  });
});

// Defined edit route
membersRoutes.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  Members.findById(id, function (err, member) {
      res.json(member);
  });
});

//  Defined update route
membersRoutes.route('/update/:id').post(function (req, res) {
    Members.findById(req.params.id, function(err, next, member) {
    if (!member) {
      return next(new Error('Could not load Document'));
    } else {
        member.name = req.body.name;
        member.email = req.body.email;
        member.telephone = req.body.telephone;

        member.save().then( result => {
          res.json('Update complete');
      })
      .catch( error  => {
            res.status(400).send('unable to update the database');
      });
    }
  });
});

// Defined delete | remove | destroy route
membersRoutes.route('/delete/:id').get(function (req, res) {
    Members.findByIdAndRemove({_id: req.params.id}, function(err, member) {
        if ( err ) {
          res.json(err);
        } else {
          res.json('Successfully removed');
        }
    });
});

module.exports = membersRoutes;
