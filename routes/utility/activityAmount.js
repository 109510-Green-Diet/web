'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-新增產品資料
//------------------------------------------
var add = async function (newData) {
    var result;

    await sql('INSERT INTO project.active (activno, activamount, description) VALUES ($1, $2, $3)', [newData.activno, newData.activamount, newData.description])
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
var remove = async function (activno) {
    var result;

    await sql('DELETE FROM project.active WHERE activno = $1', [activno])
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
var query = async function (activno) {
    var result = {};

    await sql('SELECT * FROM project.active WHERE activno = $1', [activno])
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

    await sql('UPDATE project.active SET  activityAmount=$1, description=$2 where activno=$1', [newData.activityAmount, newData.description, newData.activno])
        .then((data) => {
            results = data.rowCount;
        }, (error) => {
            results = -1;
        });

    return results;
}  

//匯出
module.exports = {add,remove,query,update};