var express = require('express');
var router = express.Router();

//增加引用函式
const food = require('./utility/food');

//接收POST請求
router.post('/', function(req, res, next) {
    var foodno = req.body.foodno;                  //取得產品編號
    var food_name = req.body.food_name;              //取得產品名稱
    var nutno = req.body.nutno;          //取得價格
    var gram = req.body.gram; 
    var calories = req.body.calories; 

    // 建立一個新資料物件
    var newData={
        foodno:foodno,
        food_name:food_name,
        nutno:nutno,
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