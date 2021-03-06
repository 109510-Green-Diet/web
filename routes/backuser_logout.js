var express = require('express');
var router = express.Router();

//增加引用函式
const backuser = require('./utility/backuser');

//接收POST請求
router.get('/', function(req, res, next) {
    req.session.back_id = null;
    req.session.password = null;           
    res.render('backuser_show', {back_id:'已登出'});  //傳至登出    
});

module.exports = router;