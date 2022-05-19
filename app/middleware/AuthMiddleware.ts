import { Context, Next } from "koa"
import { verify } from "../utils/auth"
function AuthMiddleware(ctx: Context, next: Next) {
    const token = ctx.header['token'];
    if (token !== undefined && token !== "") {
        const { error } = verify(token + '')
        if (error !== null) {
            ctx.body = {
                data: {
                    msg: error,
                    code: 400
                }
            }
            return false
        } else {
            return next()
        }
    }
    ctx.body = {
        data: {
            msg: 'token 不能为空',
            code: 400
        }
    }

}
export default AuthMiddleware