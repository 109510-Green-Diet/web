var express = require('express');
var router = express.Router();

//增加引用函式
const nutritionClassification = require('./utility/nutritionClassification');

//接收POST請求
router.post('/', function(req, res, next) {
    var nutrition_no = req.body.nutrition_no;   //取得產品編號

    var newData={
        nutrition_no:nutrition_no,                   //產品編號
        nutrition_name: req.body.nutrition_name,     //取得產品名稱
        nutrition_description: req.body.nutrition_description  //取得盤點日期
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