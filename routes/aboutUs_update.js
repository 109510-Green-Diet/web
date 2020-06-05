var express = require('express');
var router = express.Router();

//增加引用函式
const aboutUs = require('./utility/aboutUs');

//接收POST請求
router.post('/', function(req, res, next) {
    var abono = req.body.abono;   //取得產品編號

    var newData={
        abono:abono,                   //產品編號
        abo_answer: req.body.abo_answer  //取得盤點日期
    } 
    
    aboutUs.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;