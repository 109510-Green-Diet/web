'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-新增產品資料
//------------------------------------------
var add = async function (newData) {
    var result;

    await sql('INSERT INTO project.recipe (recipeno, recipe_name, seasoning_use, pic, rc_content) VALUES ($1, $2, $3, $4, $5)', [newData.recipeno, newData.recipe_name, newData.seasoning_use, newData.pic, newData.rc_content])
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
var remove = async function (recipeno) {
    var result;

    await sql('DELETE FROM project.recipe WHERE recipeno = $1', [recipeno])
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
var query = async function(recipeno){
    var result={};
    
    await sql('SELECT * FROM project.recipe WHERE recipeno = $1', [recipeno])
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

<<<<<<< HEAD
    await sql('UPDATE project.recipe SET recipe_name=$1, seasoning_use=$2, pic=$3, re_content=$4 WHERE recipeno = $5', [newData.recipe_name, newData.seasoning_use, newData.pic, newData.rc_content, newData.recipeno])
=======
    await sql('UPDATE project.recipe SET recipe_name=$1, seasoning_use=$2, pic=$3, rc_content=$4 WHERE recipeno = $5', [newData.recipe_name, newData.seasoning_use, newData.pic, newData.rc_content, newData.recipeno])
>>>>>>> backend mix
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}


//匯出
module.exports = {add, remove, query, update};