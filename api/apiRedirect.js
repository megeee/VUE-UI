/*
 @Name：公共接口转发方法
 @Author：Jeff Guo
 @url: 接口目录
 @body: 要发送的数据
 @callback: 回调
 @headers: http头
 */

var request = require('request');
require("../static/config");

exports.redirectUrl = (url,body,callback,headers,method) => {

    let apiHost = "";

    new Config().getApiHost((config) => {
        apiHost = config.HOSTNAME;
    });

    var option = {
        "url":apiHost+url,
        "Content-type" : "application/json",
        "method": method || 'post',
        "json":body,
        "headers": { "token":headers.token || ""}
    };

    request(option,(err, res, body) => {
        callback(err,body);
    });

};
