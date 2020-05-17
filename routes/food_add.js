var express = require('express');
var router = express.Router();

//增加引用函式
const food = require('./utility/food');

//接收POST請求
router.post('/', function(req, res, next) {
    var foodno = req.body.foodno;                  //取得產品編號
    var foodname = req.body.foodname;              //取得產品名稱
    var nutrition_no = req.body.nutrition_no;          //取得價格
    var gram = req.body.gram; 
    var calories = req.body.calories; 

    // 建立一個新資料物件
    var newData={
        foodno:foodno,
        foodname:foodname,
        nutrition_no:nutrition_no,
        gram:gram,
        calories:calories
    } 
    
    food.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;