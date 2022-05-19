import { Model, Table, Column } from "sequelize-typescript"

@Table
export default class Order extends Model {
    @Column
    salesman!: string
    @Column
    type!: string
    @Column
    arrive_province!: string
    @Column
    arrive_city!: string
    @Column
    weight!: string
    @Column
    client_name!: string
    @Column
    total!: string
}