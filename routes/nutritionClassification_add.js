var express = require('express');
var router = express.Router();

//增加引用函式
const nutritionClassification = require('./utility/nutritionClassification');

//接收POST請求
router.post('/', function(req, res, next) {
    var nutno = req.body.nutno;                  //取得產品編號
    var nut_name = req.body.nut_name;              //取得產品名稱
    var nut_content = req.body.nut_content;          //取得價格

    // 建立一個新資料物件
    var newData={
        nutno:nutno,
        nut_name:nut_name,
        nut_content:nut_content
    } 
    
    nutritionClassification.add(newData).then(d => {
        if (d>=0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;