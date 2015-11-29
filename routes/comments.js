var express = require('express');
var router = express.Router();
var comments = require('../data/comments.json');
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(comments);
});

router.post('/', function(req, res, next) {
  var newComment = {
    message: req.body.message,
    imageId: req.body.imageId,
  };
  console.log(newComment);
  comments.push(newComment);
  var string = JSON.stringify(comments);
  var filePath = path.join(__dirname, '../data/comments.json');
  fs.writeFile(filePath, string, function(err) {
    if (err) {
      console.log('error');
      next(err);
    } else {
      console.log('works')
      res.send(newComment);
    }
  });
});

module.exports = router;
