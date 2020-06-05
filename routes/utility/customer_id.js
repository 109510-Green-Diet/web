'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-新增產品資料
//------------------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO project.user (user_account, user_name, birth, pic) VALUES ($1, $2, $3, $4)', [newData.user_account, newData.user_name, newData.birth, newData.pic])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}

//----------------------------------
// 刪除商品
//----------------------------------
var remove = async function(user_account){
    var result;

    await sql('DELETE FROM project.user WHERE user_account = $1', [user_account])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}

//------------------------------------------
//執行資料庫動作的函式-取出單一商品
//------------------------------------------
var query = async function(user_account){
    var result={};
    
    await sql('SELECT * FROM project.user WHERE user_account = $1', [user_account])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows[0];   
            }else{
                result = -1;
            }    
        }, (error) => {
            result = null;
        });
		
    return result;
}

//----------------------------------
// 更新商品
//----------------------------------
var update = async function(newData){
    var results;

    await sql('UPDATE project.user SET user_name=$1, birth=$2, pic=$3 WHERE user_account = $4', [newData.user_name, newData.birth, newData.pic, newData.user_account])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
//匯出
module.exports = {add, remove, query, update};