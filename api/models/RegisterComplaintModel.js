// import { Sequelize, DataTypes, Model } from 'sequelize';
// import db from '../config/Database.js';
// import Registration from './RegistrationModel.js';

// class RegisterComplaint extends Model {}

// RegisterComplaint.init({
//   register_complaint_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   id_user: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: Registration, // Nama model yang menjadi referensi
//       key: 'id_user',      // Nama kolom yang menjadi referensi di model Registration
//     },
//   },
//   room_no: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   complaint_type: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   explain_complaint: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   complaint_status: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// }, {
//   sequelize: db,
//   modelName: 'register_complaint',
//   tableName: 'register_complaint',
//   freezeTableName: true,
// });

// // Jika table tidak ada, maka akan dibuat otomatis
// (async () => {
//   try {
//     await db.sync();
//     console.log("Database synchronized successfully.");
//   } catch (error) {
//     console.error("Error syncing database:", error);
//   }
// })();

// export default RegisterComplaint