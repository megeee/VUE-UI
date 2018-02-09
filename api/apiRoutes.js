/*
 @Name：转发路由配置
 @Author：Jeff Guo
 */

var express = require("express");
var router = express.Router();
var redirect = require("./apiRedirect");

var send = (req,res) => {
    var body = {};
    if(req.method === "POST"){
        body = req.body;
    } else {
        body = req.query;
    }
    redirect.redirectUrl(req.url,body,(err,body) => {
        if(!err){
            res.json(body);
        } else {
            res.json({"_status":{"_code":3232,"_message":"Timed out!"}});
        }
    },req.headers,req.method);

};

//router.get("/user/token",send);
router.get("/test",(req,res) => {
    res.json({"status":"OK"})
});

module.exports = router;
