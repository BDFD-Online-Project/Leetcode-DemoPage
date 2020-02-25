var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
// app.use('/', indexRouter);

//router address localhost:4121/
//descriptions: Index Page
//comments:
router.get('/', function(req, res, next) {
  res.render('index',{ layout: 'hero_layout' });
});

//router address localhost:4121/about
//descriptions: Test Page
//comments:for testing purpose
router.get('/about', function(req, res, next) {
  res.sendFile('testscript.html', {root: path.join(__dirname, '../files')});
});




module.exports = router;
