import Order from '../model/Order';
class OrderSerice {
    getOrder(id: number) {
        return Order.findByPk(id)
    }
    getOrderListByPage(page: number = 1, limit: number = 20) {
        return Order.findAndCountAll({ limit: limit, offset: (page - 1) * limit },)
    }
}

export default new OrderSerice()