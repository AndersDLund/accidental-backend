const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['production'];
const knex = require('knex')(config);

// filterInt - The function from MDN that confirms a particular value is actually an integer. Because parseInt isn't quite strict enough.
const filterInt = function(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
};

router.get('/:id', function(req, res) {
  const id = filterInt(req.params.id)
  console.log(id);
  knex('car_damages').where('user_car_id', id).select('*')
    .then((damage) => {
      console.log(damage.length);
      if (damage.length > 0) {
        res.json(damage);
      } else {
        res.send("no damage found");
      }
    })
    .catch(function(error) {
      console.log(error);
      res.sendStatus(500);
    })
});

module.exports = router;
