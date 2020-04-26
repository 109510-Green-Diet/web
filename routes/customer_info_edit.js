var express = require('express');
var router = express.Router();

//增加引用函式
const customer_info = require('./utility/customer_info');

//接收POST請求
router.post('/', function(req, res, next) {
    var account = req.body.account;   //取得產品編號

    var newData={
        account:account,                   //產品編號
        height: Number(req.body.height),     //取得產品名稱
        weight: Number(req.body.weight), //取得價格
        activno:activno,
        foodno:foodno  //取得盤點日期
    } 
    
    customer_info.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;