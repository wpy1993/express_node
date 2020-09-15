var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  setTimeout(() => {
    console.log(100)
  }, 3000)
  res.send('respond with a resource: ');

});

module.exports = router;
