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
      console.log(damage[0].damage_type_id, "DAMAGE!!!!")
      .del()
    })

    .then(() => {
      res.send('DELETED');
    });
});

module.exports = router;
