var express = require('express');
var router = express.Router();

//增加引用函式
const blog = require('./utility/blog');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.blogno;

    blog.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                blogno: d.blogno,
                blog_title: d.blog_title,
                blog_content: d.blog_content
            }

            res.render('blog_update_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;