var express = require('express');
var router = express.Router();

//增加引用函式
const blog = require('./utility/blog');

//接收POST請求
router.post('/', function(req, res, next) {
    var blogno = req.body.blogno;   

    var newData={
        blogno:blogno,                   
        blog_title: req.body.blog_title,    
        blog_content: req.body.blog_content  
    } 
    
    blog.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d}); 
        }else{
            res.render('updateFail');     
        }  
    })
});

//匯出
module.exports = router;