var express = require('express');
var router = express.Router();

//增加引用函式
const activityAmount = require('./utility/activityAmount');

//接收POST請求
router.post('/', function(req, res, next) {
    var actno = req.body.actno;   //取得產品編號

    var newData={
        actno:actno,                   //產品編號
        act_amount: req.body.act_amount,     //取得產品名稱
        act_content: req.body.act_content  //取得盤點日期
    } 
    
    activityAmount.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;