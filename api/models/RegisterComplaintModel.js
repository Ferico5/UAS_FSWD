import { DataTypes, Model } from 'sequelize';
import db from '../config/Database.js';
import Registration from './RegistrationModel.js';
import RoomInfo from './RoomInfoModel.js';

class RegisterComplaint extends Model {}

RegisterComplaint.init(
  {
    register_complaint_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Registration, // Nama model yang menjadi referensi
        key: 'id_user', // Nama kolom yang menjadi referensi di model Registration
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    room_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: RoomInfo,
        key: 'room_no',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    complaint_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    explain_complaint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complaint_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'RegisterComplaint',
    tableName: 'register_complaint',
    freezeTableName: true,
  }
);

export default RegisterComplaint;
