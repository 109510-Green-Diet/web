var express = require('express');
var router = express.Router();

//接收GET請求
router.get('/', function(req, res, next) {
    res.render('aboutUs_update_no');
});

module.exports = router; 