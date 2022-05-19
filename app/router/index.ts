import koaRouter from 'koa-router'
const router = new koaRouter({ prefix: "/admin" })
import IndexController from '../controller/IndexController';
import LoginController from '../controller/LoginController';

import AuthMiddleware from '../middleware/AuthMiddleware'

router.get('/login', LoginController.index)
router.get('/xiao', IndexController.xiao)

router.use(AuthMiddleware)
router.get('/', IndexController.index)
export default router