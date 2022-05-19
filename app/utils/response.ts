import { Context } from 'koa'
function seccess(ctx: Context, data: any = {}, msg: string = "操作成功", code: number = 0) {
  ctx.body = {
    code,
    data,
    msg
  }
}

function error(ctx: Context, msg: string = "操作失败", data: any = {}, code: number = 1) {
  ctx.body = {
    code,
    data,
    msg
  }
}

export default {
  seccess, error
}