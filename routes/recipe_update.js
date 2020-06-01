var express = require('express');
var router = express.Router();

//增加引用函式
const recipe = require('./utility/recipe');

//接收POST請求
router.post('/', function(req, res, next) {
    var recipe_no = req.body.recipe_no;   //取得產品編號

    var newData={
        recipe_no:recipe_no,                   //產品編號
        recipe_name: req.body.recipe_name,      //取得價格
        seasoning_use: req.body.seasoning_use  //取得盤點日期
    } 
    
    recipe.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;