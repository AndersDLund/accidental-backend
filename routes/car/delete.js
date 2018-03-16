const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['development'];
const knex = require('knex')(config);

router.delete('/:id', function(req, res) {
  const id = req.params.id;
  //knex logic
  knex('user_car')
    .where('id', id)
    .del()
    .then(() => {
      res.send('DELETED');
    });
});

module.exports = router;
