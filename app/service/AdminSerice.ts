import Admin from '../model/Admin';
class AdminSerice {
    getAdmin(id: number) {
        return Admin.findByPk(id)
    }
    getAdminAdminListByPage(page: number = 1, limit: number = 20) {
        return Admin.findAndCountAll({ limit: limit, offset: (page - 1) * limit },)
    }
}

export default new AdminSerice()