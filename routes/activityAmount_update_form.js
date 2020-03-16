var express = require('express');
var router = express.Router();

//增加引用函式
const activityAmount = require('./utility/activityAmount');

//接收POST請求
router.post('/', function(req, res, next) {
    var no = req.body.activno;                  //取得產品編號
    
    activityAmount.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                activno: d.activno,
                activityAmount: d.activityAmount,
                description: d.description
            }

            res.render('activityAmount_update_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;