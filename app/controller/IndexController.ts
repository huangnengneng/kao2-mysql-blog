import { Context } from 'koa'
import AdminSerice from '../service/AdminSerice'
import { URLSearchParams } from 'url'
import response from '../utils/response'
import paginate from '../utils/paginate'
class IndexController {
    async index(ctx: Context) {
        const admin = await AdminSerice.getAdmin(1)
        ctx.body = admin
    }


    async xiao(ctx: Context) {
        const usp = new URLSearchParams(ctx.querystring)
        let page = 1, limit = 20
        if (usp.get('page')) {
            page = Number(usp.get('page'))
        }
        if (usp.get('limit')) {
            limit = Number(usp.get('limit'))
        }

        const { rows, count } = await AdminSerice.getAdminAdminListByPage(page, limit)

        response.seccess(ctx, paginate(rows, page, count, limit))
    }
}
export default new IndexController();