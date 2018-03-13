const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['development'];
const knex = require('knex')(config);

router.put("/:id", function(req, res) {
  const id = req.params.id;
  const updatedUser = {
    full_name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    organization: req.body.organization
  };
  //knex logic
  knex('users')
    .where('id', id)
    .update(updatedUser)
    .then(() => {
      console.log(updatedUser, 'updated user');
      res.send("updated your profile");
    });
});

module.exports = router;
