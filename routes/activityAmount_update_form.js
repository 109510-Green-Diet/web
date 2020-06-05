var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const activityAmount = require('./utility/activityAmount');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.actno;

    activityAmount.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                actno: d.actno,
                act_amount: d.act_amount,
                act_content: d.act_content
            }

            res.render('activityAmount_update_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;