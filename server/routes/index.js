var express = require('express');
const path = require('path');
var router = express.Router();




router.get('/', function(req, res) {
  
  res.send({greeting:'Hello React x Node.jasdasds'});
  //res.send(express.static(path.join(__dirname, '../../build/index.html')));
});

module.exports = router;