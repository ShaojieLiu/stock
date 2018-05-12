var express = require('express');
var router = express.Router();
const getGdsh = require('../../gdsh')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  res.sendfile('./myapp/views/index.html')
  // res.render('index', { title: '股票之神' });
});

/* GET 股东数. */
router.get('/gdsh', function(req, res, next) {
  console.log(req.query)
  getGdsh(txt => {
    res.render('gdsh', { data: txt.split('\n').map(row => row.split('\t')) })
  }, req.query)
});

/* GET 十大流通股东格式化. */
router.get('/ltgd', function(req, res, next) {
  console.log(req.query)
  res.sendfile('./myapp/views/ltgd.html')
});

module.exports = router;
