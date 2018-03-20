const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['production'];
const knex = require('knex')(config);

router.post('/:id', function(req, res) {

      return knex('user_car').insert({
          user_id: req.params.id,
          model_id: req.body.model_id,
          plate: req.body.plate
        }).then((newCar) => {
          res.sendStatus(200);
        }).catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
});

module.exports = router;
