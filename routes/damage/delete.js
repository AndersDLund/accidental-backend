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
      knex(damage.damage_type_id, req.body.damage_type_id)
      .then((damageType)=>{
        console.log(damageType);
      })
    })

    .then(() => {
      res.send('DELETED');
    });
});

module.exports = router;
