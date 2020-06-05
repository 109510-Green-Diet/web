var express = require('express');
var router = express.Router();

//增加引用函式
const activityAmount = require('./utility/activityAmount');

//接收POST請求
router.post('/', function(req, res, next) {
    var actno = req.body.actno;                  //取得產品編號
    

    
    
    activityAmount.remove(actno).then(d => {
        if (d>=0){
            res.render('removeSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('removeFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;