/**
 * Created by ly on 15-7-10.
 */
"use strict";
const coRequest   = require("co-request");
const extend      = require("extend");
const log         = require("../log/boleLog").boleLog;

class Request{
    constructor(){
        this.param = {
            uri: "",
            method: "GET",
            json: true
        };
    }
    *transfer(options){
        let params = {};
        extend(true, params, this.param, options);
        let result =  yield coRequest(params);
        log.info(params);
        log.info(result.body);
        return result;
    }
}

module.exports = new Request;