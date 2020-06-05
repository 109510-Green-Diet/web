'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-新增產品資料
//------------------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO project.question (question, answer, serno) VALUES ($1, $2, $3)', [newData.question, newData.answer, newData.serno])
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
var remove = async function (serno) {
    var result;

    await sql('DELETE FROM project.question WHERE serno = $1', [serno])
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
var query = async function(serno){
    var result={};
    
    await sql('SELECT * FROM project.question WHERE serno = $1', [serno])
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

    await sql('UPDATE project.question SET question=$1, answer=$2 WHERE serno = $3', [newData.question, newData.answer, newData.serno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
  
    return results;
}

//匯出
module.exports = {add, remove, query, update};