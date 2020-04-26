var express = require('express');
var router = express.Router();

//增加引用函式
const experience = require('./utility/experience');

//接收POST請求
router.post('/', function(req, res, next) {
    var account = req.body.account;                 
    var etitle = req.body.etitle;              
    var description = req.body.description  

    // 建立一個新資料物件
    var newData={
        account:account,
        etitle:etitle,
        description:description
    } 
    
    experience.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;