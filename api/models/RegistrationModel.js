import { Sequelize, DataTypes, Model } from 'sequelize';
import db from '../config/Database.js';

class Registration extends Model {}

Registration.init({
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Registration',
  tableName: 'registration',
  freezeTableName: true,
});

// Jika table tidak ada, maka akan dibuat otomatis
(async () => {
  try {
    await db.sync();
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();

export default Registration