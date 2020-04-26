var express = require('express');
var router = express.Router();

//增加引用函式
const customer_id = require('./utility/customer_id');

//---------------------------
// 引用multer外掛
//---------------------------
const multer = require('multer');

// 宣告上傳存放空間及檔名更改
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/pic');
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname);
    }
})

// 產生multer的上傳物件
var maxSize = 1024 * 1024;  //設定最大可接受圖片大小(1M)

var upload = multer({
    storage: storage
})
//---------------------------

//接收POST請求
router.get('/', upload.single('pic'), function (req, res, next) {
    var no = req.query.account;



    // 如果有選擇圖片
    if (typeof req.file != 'undefined') {
        // 傳入檔案不可超過maxSize
        if (req.file.size > maxSize) {
            res.render('fileSizeError');  //圖片過大
            return;
        }
    }
    customer_id.query(no).then(d => {
        if (d != null && d != -1) {
            var data = {
                account: d.account,
                username: d.username,
                birth: d.birth,
                pic: d.pic
            }

            // 如果有選擇圖片
            if (typeof (req.file) != 'undefined') {
                pic = req.file.filename;   //取得上傳照片名稱
            }

            // 建立一個新資料物件


            res.render('customer_id_edit_form', { item: data });  //將資料傳給更新頁面
        } else {
            res.render('notFound');  //導向找不到頁面
        }
    })
});

module.exports = router;