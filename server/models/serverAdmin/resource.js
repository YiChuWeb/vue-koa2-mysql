/**
 * Created by yong.liu on 2017/2/8.
 */
"use strict";
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

class Resource{
    constructor(){

    }

    get resourceModel(){
        let resourceSchema = Schema({
            name: String, //名称
            code: String,  //资源编号
            uri: String,   //资源对应uri
            description: String,  //描述
            ancestors: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "resource"  //祖先资源id集合
                }
            ],
            parent: {
                type: Schema.Types.ObjectId,
                ref: "resource"  //父资源id
            },
            isParent: Boolean  //是否为父资源  true--是 false--不是
        });
        return mongoose.model("resource", resourceSchema);
    }
}

module.exports = new Resource;