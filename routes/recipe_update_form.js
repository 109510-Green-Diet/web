var express = require('express');
var router = express.Router();

//增加引用函式
//var moment = require('moment');
const recipe = require('./utility/recipe');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.recipe_no;

    recipe.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                recipe_no: d.recipe_no,
                recipe_name: d.recipe_name,
                seasoning_use: d.seasoning_use
            }

            res.render('recipe_update_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;