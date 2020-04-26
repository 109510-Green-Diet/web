'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-新增產品資料
//------------------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO project.food (foodno, foodname, nutrition_no, gram, calories) VALUES ($1, $2, $3, $4, $5)', [newData.foodno, newData.foodname, newData.nutrition_no, newData.gram, newData.calories])
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
var remove = async function (foodno) {
    var result;

    await sql('DELETE FROM project.food WHERE foodno = $1', [foodno])
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
var query = async function(foodno){
    var result={};
    
    await sql('SELECT * FROM project.food WHERE foodno = $1', [foodno])
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

    await sql('UPDATE project.food SET foodname=$1, nutrition_no=$2, gram=$3, calories=$4 WHERE foodno = $5', [newData.foodname, newData.nutrition_no, newData.gram, newData.calories, newData.foodno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}

//匯出
module.exports = {add, remove, query, update};
