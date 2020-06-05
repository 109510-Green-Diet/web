var express = require('express');
var router = express.Router();

//增加引用函式
const question = require('./utility/question');

//接收POST請求
router.post('/', function(req, res, next) {
    var serno = req.body.serno;   //取得產品編號

    var newData={
        serno:serno,                   //產品編號
        question: req.body.question,     //取得產品名稱
        answer: req.body.answer
    } 
    
    question.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;