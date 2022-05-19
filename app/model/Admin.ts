import { Model, Table, Column } from "sequelize-typescript"

@Table
export default class Admin extends Model {
    @Column
    name!: string
    @Column
    email!: string
    @Column
    mobile!: string

}