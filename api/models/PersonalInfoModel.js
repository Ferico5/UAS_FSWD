import { DataTypes, Model } from 'sequelize';
import db from '../config/Database.js';
import Registration from './RegistrationModel.js';

class PersonalInfo extends Model {}

PersonalInfo.init(
  {
    id_personal_info: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Registration,
        key: 'id_user',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    course: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emergency_contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guardian_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guardian_relation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guardian_contact_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correspondense_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correspondense_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correspondense_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correspondense_pincode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'PersonalInfo',
    tableName: 'personal_info',
    freezeTableName: true,
  }
);

export default PersonalInfo;
