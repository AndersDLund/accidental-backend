var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send("hey cool");
});

module.exports = router;
