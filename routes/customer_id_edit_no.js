var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('customer_id_edit_no');
});

//匯出
module.exports = router;