const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['production'];
const knex = require('knex')(config);

router.put('/:id', function(req, res) {
  const id = req.params.id;
  //knex logic
  knex('car_damages')
    .where('user_car_id', id)
    .then((damage)=>{
      knex('car_damages')
      .where('damage_type_id', req.body.damage_type_id)
      .then((damageType)=>{
      knex('car_damages')
      .where('damage_type_id', req.body.damage_type_id)
      .del()
      })
    })

    .then(() => {
      res.send('DELETED');
    });
});

module.exports = router;
