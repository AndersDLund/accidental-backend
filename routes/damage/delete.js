const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['production'];
const knex = require('knex')(config);

router.delete('/:id', function(req, res) {
  const id = req.params.id;
  //knex logic
  knex('car_damages')
    .where('user_car_id', id)
    .select('damage_type_id')
    .then((damage)=>{
      knex('car_damages')
      .where('damage_type_id', req.body.damage_type_id)
      .then((damageCool)=>{
        console.log(damageCool);
        for (let i = 0; i < req.body.iteration; i++){
          console.log(i);
        }
      })
    })
    .del()
    .then(() => {
      res.send('DELETED');
    });
});

module.exports = router;
