import { Context, Next } from 'koa'
import { accessLogger } from '../logger/index'
function AccessLoggerMiddleware(ctx: Context, next: Next) {
    const logset = `path:${ctx.path} | method:${ctx.method} | ua:${ctx.header['user-agent']}`
    accessLogger.info(logset)
    return next()
}

export default AccessLoggerMiddleware