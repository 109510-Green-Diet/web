var express = require('express');
var router = express.Router();

//增加引用函式
const customer_info = require('./utility/customer_info');

//接收POST請求
router.get('/', function (req, res, next) {
    var no = req.query.account;

    customer_info.query(no).then(d => {
        if (d != null && d != -1) {
            var data = {
                user_account: d.user_account,
                height: d.height,
                weight: d.weight,
                actno: d.actno,
                foodno: d.foodno
            }

            res.render('customer_info_update_form', {item:data});  //將資料傳給更新頁面
        } else {
            res.render('notFound');  //導向找不到頁面
        }
    })
});

module.exports = router;