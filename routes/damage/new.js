const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['production'];
const knex = require('knex')(config);

router.post('/:id', function(req, res) {

      return knex('car_damages').insert({
          user_car_id: req.params.id,
          damage_type_id: req.body.damage_type_id,
        }).then((newCar) => {
          res.sendStatus(200);
        }).catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
});

module.exports = router;
