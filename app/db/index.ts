import { Sequelize } from 'sequelize-typescript'
import path from 'path'
import config from '../config/index'
import { dbLogger } from '../logger/index'

const sequelize = new Sequelize(config.db.db_name as string, config.db.db_user as string, config.db.db_password as string, {
    host: config.db.db_host,
    port: config.db.db_port as unknown as number,
    logging: msg => dbLogger.info(msg),
    define: {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    },
    models: [path.join(__dirname, '..', 'model/**/*.ts'), path.join(__dirname, '..', 'model/**/*.js')],
    dialect: 'mysql'
})

const db = async () => {
    try {
        await sequelize.authenticate()
        console.log('数据库链接成功')
    } catch (err) {
        console.log('数据库链接失败', err)
    }
}

export default db