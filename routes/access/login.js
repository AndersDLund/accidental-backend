const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['development'];
const knex = require('knex')(config);
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(8);



router.post('/', (req, res) => {
  let userObj = req.body;

  knex.select('*').from('users').where('email', userObj.email)
    .then((result) => {
      if (result.length === 0) {
        return res.send('no account with that email');
      }
      return bcrypt.compare(userObj.password, result[0].password)
        .then((loginCheck) => {
          if (loginCheck) { // If the passwords match, login and redirect to their profileEdit page.
            console.log(result);
            return res.send(result[0])
            res.cookie('user', '1', {
              maxAge: 900000,
              httpOnly: true,
              expries: false
            });
            req.session.user_id = result[0].id;
            req.session.email = result[0].email;
            res.send({
              id: req.session.user_id,
              email: req.session.email,
            })

          } else { // If passwords don't match, send a 401.
            return res.status(401).send('incorrect email or password');
          }
        })
    }).catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
