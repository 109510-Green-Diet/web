var express = require('express');
var router = express.Router();

//增加引用函式
const activityAmount = require('./utility/activityAmount');

//接收POST請求
router.post('/', function(req, res, next) {
    var activno = req.body.activno;                  //取得產品編號
    var activamount = req.body.activamount;              //取得產品名稱
    var description = req.body.description;          //取得價格

    // 建立一個新資料物件
    var newData={
        activno:activno,
        activamount:activamount,
        description:description
    } 
    
    activityAmount.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;