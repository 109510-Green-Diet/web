var express = require('express');
var router = express.Router();

//接收GET請求
router.get('/', function(req, res, next) {
    var back_id = req.session.back_id;; 

    if(back_id==null || back_id==undefined){
      back_id = '尚未登入';
    }

    res.render('backuser_show', { back_id: back_id });
});

module.exports = router;

