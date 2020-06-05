'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-新增產品資料
//------------------------------------------
var add = async function (newData) {
    var result;

    await sql('INSERT INTO project.nutrition (nutno, nut_name, nut_content) VALUES ($1, $2, $3)', [newData.nutno, newData.nut_name, newData.nut_content])
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
var remove = async function(nutno){
    var result;

    await sql('DELETE FROM project.nutrition WHERE nutno = $1', [nutno])
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
var query = async function(nutno){
    var result={};
    
    await sql('SELECT * FROM project.nutrition WHERE nutno = $1', [nutno])
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

    await sql('UPDATE project.nutrition SET nut_name=$1, nut_content=$2 WHERE nutno = $3', [newData.nut_name, newData.nut_content, newData.nutno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}

//匯出
module.exports = {add, remove, query, update};