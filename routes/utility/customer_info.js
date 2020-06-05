'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-新增產品資料
//------------------------------------------
var add = async function (newData) {
    var result;

    await sql('INSERT INTO information (user_account, height, weight, actno) VALUES ($1, $2, $3, $4)', [newData.user_account, newData.height, newData.weight, newData.actno])
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
var remove = async function (user_account) {
    var result;

    await sql('DELETE FROM customer_info WHERE user_account = $1', [user_account])
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
var query = async function (user_account) {
    var result = {};

    await sql('SELECT * FROM customer_info WHERE user_account = $1', [user_account])
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

    await sql('UPDATE customer_info SET height=$1, weight=$2, actno=$3, foodno=$4 WHERE user_account = $5', [newData.height, newData.weight, newData.activNo, newData.foodNo, newData.user_account])
        .then((data) => {
            results = data.rowCount;
        }, (error) => {
            results = -1;
        });

    return results;
}
//匯出
module.exports = { add, remove, query, update };