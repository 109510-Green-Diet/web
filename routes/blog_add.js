var express = require('express');
var router = express.Router();

//增加引用函式
const blog = require('./utility/blog');

//接收POST請求
router.post('/', function(req, res, next) {
    var serno = req.body.serno;                 
    var blog_title = req.body.blog_title;             
    var blog_description = req.body.blog_description;  

    // 建立一個新資料物件
    var newData={
        serno:serno,
        blog_title:blog_title,
        blog_description:blog_description
    } 
    
    blog.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;