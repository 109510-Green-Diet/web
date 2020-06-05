var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const aboutUs = require('./utility/aboutUs');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.abono;

    aboutUs.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                abono: d.abono,
                abo_answer: d.abo_answer
            }

            res.render('aboutUs_update_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;