var express = require('express');
var router = express.Router();

//增加引用函式
const aboutUs = require('./utility/aboutUs');

//接收POST請求
router.post('/', function(req, res, next) {
    var abo_answer = req.body.abo_answer;  //取得盤點日期

    // 建立一個新資料物件
    var newData={
       
        abo_answer:abo_answer
    } 
    
    aboutUs.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;