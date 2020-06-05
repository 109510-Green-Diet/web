var express = require('express');
var router = express.Router();

//增加引用函式
const food = require('./utility/food');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.foodno;

    food.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                foodno: d.foodno,
                food_name: d.food_name,
                nutno: d.nutno,
                gram: d.gram,
                calories: d.calories
            }

            res.render('food_update_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;