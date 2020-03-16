var express = require('express');
var router = express.Router();

//增加引用函式
const nutritionClassification = require('./utility/nutritionClassification');

//接收POST請求
router.post('/', function(req, res, next) {
    var nutrition_no = req.body.nutrition_no;                  //取得產品編號
    var nutrition_name = req.body.nutrition_name;              //取得產品名稱
    var nutrition_description = req.body.nutrition_description;          //取得價格

    // 建立一個新資料物件
    var newData={
        nutrition_no:nutrition_no,
        nutrition_name:nutrition_name,
        nutrition_description:nutrition_description
    } 
    
    nutritionClassification.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;