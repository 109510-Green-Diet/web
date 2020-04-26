var express = require('express');
var router = express.Router();

//增加引用函式
const food = require('./utility/food');

//接收POST請求
router.post('/', function(req, res, next) {
    var foodno = req.body.foodno;                  //取得產品編號

    var newData={
        foodno : foodno,
        foodname : req.body.foodname,            //取得產品名稱
        nutrition_no : req.body.nutrition_no,          //取得價格
        gram : req.body.gram,
        calories : req.body.calories
    }


    
    food.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;