var express = require('express');
var router = express.Router();

//增加引用函式
const backuser = require('./utility/backuser');

//接收POST請求
router.post('/', function(req, res, next) {
    var back_id = req.body.back_id;                 //取得帳號
    var password = req.body.password;     //取得密碼

    backuser.login(back_id, password).then(d => {
        if (d==null){
            req.session.back_id = null;
            req.session.password = null;           
            res.render('loginFail');  //傳至登入失敗
        }else{
            req.session.back_id = d.back_id;
            req.session.password = d.password;
            res.render('backuser_show', {back_id:d.back_id});   //導向使用者
        }  
    })
});

module.exports = router;