var express = require('express');
var router = express.Router();

//增加引用函式
const activityAmount = require('./utility/activityAmount');

//接收POST請求
router.post('/', function(req, res, next) {
    var actno = req.body.actno;                  //取得產品編號
    var act_amount = req.body.act_amount;              //取得產品名稱
    var act_content = req.body.act_content;          //取得價格

    // 建立一個新資料物件
    var newData={
        actno:actno,
        act_amount:act_amount,
        act_content:act_content
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