const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['production'];
const knex = require('knex')(config);

router.delete('/:id', function(req, res) {
  const id = req.params.id;
  //knex logic
  knex('car_damages')
    .where('user_car_id', id)
    .then((damage)=>{
      console.log(damage)
      knex('car_damages')
      .where('damage_type_id', req.body.damage_type_id)
      .first(delThis)
      .del(delThis)
      })
      .then((deletedItem)=>{
        res.send("DELETED");
    })  .catch(function(error) {
        console.log(error);
        res.sendStatus(500);
});
});

module.exports = router;
