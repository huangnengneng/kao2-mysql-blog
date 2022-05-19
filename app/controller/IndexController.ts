import { Context } from 'koa'
import AdminService from '../service/AdminSerice'
import OrderService from '../service/OrderSerice'

import { URLSearchParams } from 'url'
import response from '../utils/response'
import paginate from '../utils/paginate'
class IndexController {
    async index(ctx: Context) {
        const admin = await AdminService.getAdmin(1)
        response.seccess(ctx, admin)
    }
    async adminList(ctx: Context) {
        const usp = new URLSearchParams(ctx.querystring)
        let page = 1, limit = 20
        if (usp.get('page')) {
            page = Number(usp.get('page'))
        }
        if (usp.get('limit')) {
            limit = Number(usp.get('limit'))
        }

        const { rows, count } = await AdminService.getAdminAdminListByPage(page, limit)

        response.seccess(ctx, paginate(rows, page, count, limit))
    }
    async orderList(ctx: Context) {
        const usp = new URLSearchParams(ctx.querystring)
        let page = 1, limit = 20
        if (usp.get('page')) {
            page = Number(usp.get('page'))
        }
        if (usp.get('limit')) {
            limit = Number(usp.get('limit'))
        }

        const { rows, count } = await OrderService.getOrderListByPage(page, limit)

        response.seccess(ctx, paginate(rows, page, count, limit))
    }
}
export default new IndexController();