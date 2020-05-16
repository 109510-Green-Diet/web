'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//---------------------------------------------
// 使用者登入
//---------------------------------------------
var login = async function(backid, password){   
    var result;

    //取得員工資料
    await sql('SELECT * FROM project.backuser WHERE backid=$1 and password=$2', [backid, password])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows[0];
            }else{
                result = null;
            } 
        }, (error) => {
            result = null;
        });
    
    //回傳物件
    return result;
}

//匯出
module.exports = {login};