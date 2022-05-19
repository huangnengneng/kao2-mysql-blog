import { Context } from 'koa'
import AdminSerice from '../service/AdminSerice'
import { sign } from '../utils/auth'
import response from '../utils/response'
class LoginController {
    async index(ctx: Context) {
        const admin = await AdminSerice.getAdmin(1)
        if (admin === null) {
            return response.error(ctx, '用户不存在', {})
        }
        const token = sign(admin)
        response.seccess(ctx, { token: token })
    }
}

export default new LoginController()