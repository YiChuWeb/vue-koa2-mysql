/**
 * Created by yong.liu on 2016/11/3.
 */
"use strict";

function ErrorUtil(){

}

ErrorUtil.prototype.constructor = ErrorUtil;

ErrorUtil.prototype.handleError = function(errorJson, errorCode){
    errorJson = errorJson || require(error.json);
    let errorMessage = "";
    if(errorCode){
        errorMessage = errorJson[errorCode];
    }
    return errorMessage;
}

module.exports = new ErrorUtil;