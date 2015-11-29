var express = require('express');
var router = express.Router();
var memes = require('../data/memes.json');

/* GET  */
router.get('/', function(req, res, next) {
  res.send(memes);
});


module.exports = router;
