'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-新增產品資料
//------------------------------------------
var add = async function (newData) {
    var result;

    await sql('INSERT INTO project.active (actno, act_amount, act_content) VALUES ($1, $2, $3)', [newData.actno, newData.act_amount, newData.act_content])
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
var remove = async function (actno) {
    var result;

    await sql('DELETE FROM project.active WHERE actno = $1', [actno])
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
var query = async function (actno) {
    var result = {};

    await sql('SELECT * FROM project.active WHERE actno = $1', [actno])
        .then((data) => {
            if (data.rows.length > 0) {
                result = data.rows[0];
            } else {
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
var update = async function (newData) {
    var results;

    await sql('UPDATE project.active SET  act_amount=$1, act_content=$2 where actno=$1', [newData.act_amount, newData.act_content, newData.actno])
        .then((data) => {
            results = data.rowCount;
        }, (error) => {
            results = -1;
        });

    return results;
}  

//匯出
module.exports = {add,remove,query,update};