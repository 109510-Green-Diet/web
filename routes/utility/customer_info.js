'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
// 取出型態資料
//------------------------------------------
var getDropdownData = async function(){
    //儲存下拉式選單資料
    var protype;
    
    //取回protype資料
    await sql('SELECT * FROM protype ORDER BY project.active.activno')
        .then((data) => {
            protype = data.rows;  
        }, (error) => {
            result = [];
        });
    
    //設定回傳資料    
    var result = {};
    result.protype = protype;

    //回傳
    return result;
}

//------------------------------------------
//執行資料庫動作的函式-新增產品資料
//------------------------------------------
var add = async function (newData) {
    var result;

    await sql('INSERT INTO project.information (account, height, weight, activno, foodno) VALUES ($1, $2, $3, $4, $5)', [newData.account, newData.height, newData.weight, newData.activno, newData.foodno])
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
var remove = async function (account) {
    var result;

    await sql('DELETE FROM project.information WHERE account = $1', [account])
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
var query = async function (account) {
    var result = {};

    await sql('SELECT * FROM project.information WHERE account = $1', [account])
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
var edit = async function (newData) {
    var results;

    await sql('UPDATE project.information SET height=$1, weight=$2, activno=$3, foodno=$4, WHERE account = $5', [newData.height, newData.weight, newData.activno, newData.foodno, newData.account])
        .then((data) => {
            results = data.rowCount;
        }, (error) => {
            results = -1;
        });

    return results;
}
//匯出
module.exports = { getDropdownData, add, remove, query, edit };