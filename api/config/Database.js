import { Sequelize } from "sequelize";

const db = new Sequelize('uas_fswd_2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db