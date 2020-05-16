var express = require('express');
var router = express.Router();

//接收GET請求
router.get('/', function(req, res, next) {
    var backid = req.session.backid;; 

    if(backid==null || backid==undefined){
      backid = '尚未登入';
    }

    res.render('backuser_show', { backid: backid });
});

module.exports = router;

