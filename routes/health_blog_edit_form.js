var express = require('express');
var router = express.Router();

//增加引用函式
const health_blog = require('./utility/health_blog');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.blogno;

    health_blog.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                blogno: d.blogno,
                blogname: d.blogname,
            }

            res.render('health_blog_edit_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;