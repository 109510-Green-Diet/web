'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-新增產品資料
//------------------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO project.blog (serno, blog_title, blog_description) VALUES ($1, $2, $3)', [newData.serno, newData.blog_title, newData.blog_description])
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
var remove = async function(serno){
    var result;

    await sql('DELETE FROM project.blog WHERE serno = $1', [serno])
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
    
    await sql('SELECT * FROM project.blog WHERE serno = $1', [serno])
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

    await sql('UPDATE project.blog SET blog_title=$1, blog_description=$2 WHERE serno=$3', [newData.blog_title, newData.blog_description, newData.serno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}


//匯出
module.exports = {add, remove, query, update};