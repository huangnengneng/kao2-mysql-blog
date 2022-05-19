import dotenv from 'dotenv';
dotenv.config()
import db from '../app/db'
db()
import Koa from 'koa';
import router from './router'
import { Server } from 'http'
import AccessLoggerMiddleware from './middleware/AccessLoggerMiddleware'
const app = new Koa


app.use(AccessLoggerMiddleware).use(router.routes())
const run = (port: any): Server => {
    console.log(`http://127.0.0.1:${port}/`)
    return app.listen(port)
}

export default run