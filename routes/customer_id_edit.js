var express = require('express');
var router = express.Router();

//增加引用函式
const customer_id = require('./utility/customer_id');

//接收POST請求
router.post('/', function(req, res, next) {
    var account = req.body.account;   //取得產品編號

    var newData={
        account:account,                   //產品編號
        userName: req.body.userName,     //取得產品名稱
        birth: Number(req.body.birth), //取得價格
        pic  //取得盤點日期
    } 
    
    customer_id.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;