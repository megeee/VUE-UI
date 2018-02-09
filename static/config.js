;!(function(win){
    "use strict";

    var Config = function(){

    };

    Config.prototype.getApiHost = function(callback){

        var apiConfig = {
            HOSTNAME: "https://www.quancode.net/",
            PORT: 8088
        };

        if(typeof callback === "function") {
            callback(apiConfig)
        } else {
            console.warn("It must be a function!");
        }

    };

    Config.prototype.getDevConfig = function(){
        return {
            PORT: 8002,
            PROJECT_NAME: "LZ-UI项目"
        }
    };

    //More opction

    win.Config = Config;

})((function(){
    return typeof window === "undefined" ? global : window;
})());
