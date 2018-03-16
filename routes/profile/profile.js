const express = require('express');
const router = express.Router();
const config = require('../../knexfile.js')['development'];
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
  knex('users')
  .whereIn("users.id", id)
  .fullOuterJoin('user_car', 'users.id', 'user_car.user_id')
    .then((user) => {
      if (user.length !== 0) {
        console.log(user);
        res.json(user);
      } else {
        res.send("no user found");
      }
    })
    .catch(function(error) {
      console.log(error);
      res.sendStatus(500);
    })
});

module.exports = router;
