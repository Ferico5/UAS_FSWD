import { Sequelize } from "sequelize";

const db = new Sequelize('uas_fswd', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db