// 数据校验工具

import Schema, {Rules, Value} from "async-validator";
import {Context} from "koa";

async function validate <T extends Value>(ctx:Context,rules:Rules): Promise<{data:T,error:any|null}>{
    const validator = new Schema(rules)
    let data:any
    switch (ctx.method){
        case "GET":
            break``
        case "POST":
            data = getFormData(ctx)
            break
        case "DELETE":
            break
        case "PUT":
            break
    }
    return await validator.validate(data).then(()=>{
        return {
            data:data as T,
            error:null
        }
    }).catch(error=>{
        return {
            data:{} as T,
            error:error.errors[0].message
        }
    })
}
function getFormData(ctx:Context){
    return ctx.request.body
}
export default validate