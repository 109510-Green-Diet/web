var express = require('express');
var router = express.Router();

//增加引用函式
//var moment = require('moment');
const recipe = require('./utility/recipe');

//接收GET請求
router.get('/', function(req, res, next) {
<<<<<<< HEAD
    var no = req.query.recipe_no;
=======
    var no = req.query.recipeno;
>>>>>>> backend mix

    recipe.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
<<<<<<< HEAD
                recipe_no: d.recipe_no,
                recipe_name: d.recipe_name,
                seasoning_use: d.seasoning_use
=======
                recipeno: d.recipeno,
                recipe_name: d.recipe_name,
                seasoning_use: d.seasoning_use,
                pic: d.pic,
                rc_content: d.rc_content
>>>>>>> backend mix
            }

            res.render('recipe_update_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;