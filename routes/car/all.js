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

router.get('/', function(req, res) {
  const id = filterInt(req.params.id)
  console.log(id);
  knex('car_model')
  .fullOuterJoin('car_make', 'car_model.make_id', 'car_make.id')
  .select('*')
  .where('car_model.model', '!=', 'null')
    .then((cars) => {
      if (cars.length !== 0) {
        res.json(cars);
      } else {
        res.send("no car found");
      }
    })
    .catch(function(error) {
      console.log(error);
      res.sendStatus(500);
    })
});

module.exports = router;
