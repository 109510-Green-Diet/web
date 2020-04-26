var express = require('express');
var router = express.Router();

//增加引用函式
const nutritionClassification = require('./utility/nutritionClassification');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.nutrition_no;

    nutritionClassification.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                nutrition_no: d.nutrition_no,
                nutrition_name: d.nutrition_name,
                nutrition_description: d.nutrition_description 
            }

            res.render('nutritionClassification_update_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;