var express = require('express');
var router = express.Router();

//增加引用函式
const nutritionClassification = require('./utility/nutritionClassification');

//接收POST請求
router.post('/', function(req, res, next) {
    var nutrition_no = req.body.nutrition_no;   //取得產品編號
   
    nutrition.remove(nutrition_no).then(d => {
        if(d>=0){
            res.render('removeSuccess', {results:d});  //傳至成功頁面     
        }else{
            res.render('removeFail');     //導向錯誤頁面
        }
    })    
});

module.exports = router;