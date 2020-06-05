var express = require('express');
var router = express.Router();

//增加引用函式
const nutritionClassification = require('./utility/nutritionClassification');

//接收POST請求
router.post('/', function(req, res, next) {
    var nutno = req.body.nutno;   //取得產品編號

    var newData={
        nutno:nutno,                   //產品編號
        nut_name: req.body.nut_name,     //取得產品名稱
        nut_content: req.body.nut_content  //取得盤點日期
    } 
    
    nutritionClassification.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;