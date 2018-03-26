const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['production'];
const knex = require('knex')(config);

router.delete('/:id', function(req, res) {
  const id = req.params.id;
  //knex logic
  knex('car_damages')
    .where('user_car_id', id)
    .first()
    .then((firstDamage)=>{
      console.log(firstDamage)
      knex('car_damages')
      .where('damage_type_id', firstDamage.damage_type_id)
      .first()
      .then((delThis)=>{
      knex('car_damages')
      .del(delThis)
      })
      .then(()=>{
        res.send('DELETED');
      })

    })  .catch(function(error) {
        console.log(error);
        res.sendStatus(500);
      })


});

module.exports = router;
