const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['production'];
const knex = require('knex')(config);

router.delete('/:id', function(req, res) {
  const id = req.params.id;
  let limit = req.query.limit || 1;
  //knex logic
  knex('car_damages')
    .where('user_car_id', id)
    .andWhere('damage_type_id', req.body.damage_type_id)
    .del()
    })

module.exports = router;
