var express = require('express');
var router = express.Router();

//增加引用函式
const question = require('./utility/question');

//接收POST請求
router.post('/', function(req, res, next) {
    var serno = req.body.serno;                  //取得產品編號
    
    question.query(serno).then(d => {
        if (d!=null && d!=-1){
            var data = {
                serno: d.serno,
                question: d.question,
                answer: d.answer
            }

            res.render('question_update_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;