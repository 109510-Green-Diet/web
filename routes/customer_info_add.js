var express = require('express');
var router = express.Router();

//增加引用函式
const customer_info = require('./utility/customer_info');

//接收POST請求
router.post('/', function(req, res, next) {
    var user_account = req.body.user_account;                  //取得產品編號
    var height = Number(req.body.height);              //取得產品名稱
    var weight = Number(req.body.weight);          //取得價格
    var actno = req.body.actno;
    var foodno = req.body.foodno;  //取得盤點日期

    // 建立一個新資料物件
    var newData={
        user_account:user_account,
        height:height,
        weight:weight,
        actno:actno,
        //foodno:foodno
    } 
    
    customer_info.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;