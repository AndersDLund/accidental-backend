const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['development'];
const knex = require('knex')(config);
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(8);


router.post('/', function(req, res) {
  let newUser = req.body;

  knex.select('email').from('users').where('email', newUser.email)
    .then((result) => {
      if (result.length !== 0) {
        return res.send('Email already exists');
      }

      return bcrypt.hash(newUser.password, 10, (err, hash) => {
        newUser.hashpw = hash;

        knex('users').insert({
          full_name: newUser.full_name,
          email: newUser.email,
          password: newUser.hashpw,
          organization: newUser.organization
        }).then(() => {
          res.sendStatus(200);
        }).catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
      });
    });
});


module.exports = router;
