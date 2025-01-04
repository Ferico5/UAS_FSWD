import { DataTypes, Model } from 'sequelize';
import db from '../config/Database.js';
import RegisterComplaint from './RegisterComplaintModel.js';

class ComplaintAction extends Model {}

ComplaintAction.init(
  {
    id_complaint_action: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    register_complaint_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: RegisterComplaint,
        key: 'register_complaint_id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    complaint_remark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'ComplaintAction',
    tableName: 'complaint_action',
    freezeTableName: true,
  }
);

export default ComplaintAction;
