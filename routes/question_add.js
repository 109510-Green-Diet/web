var express = require('express');
var router = express.Router();

//增加引用函式
const question = require('./utility/question');

//接收POST請求
router.post('/', function(req, res, next) {
    var serno = req.body.serno;                  //取得產品編號
    var question = req.body.question;              //取得產品名稱
    var answer = req.body.answer;          //取得價格

    // 建立一個新資料物件
    var newData={
        serno:serno,
        question:question,
        answer:answer
    } 
    
    question.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;