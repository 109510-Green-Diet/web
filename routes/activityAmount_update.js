var express = require('express');
var router = express.Router();

//增加引用函式
const activityAmount = require('./utility/activityAmount');

//接收POST請求
router.post('/', function(req, res, next) {
    var activno = req.body.activno;                  //取得產品編號

    var newData={
        activno : activno,
        activamount:  req.body.activamount,            //取得產品名稱
        description:  req.body.description
    }


    
    activityAmount.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;