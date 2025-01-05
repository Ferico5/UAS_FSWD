import { DataTypes, Model } from 'sequelize';
import db from '../config/Database.js';
import Registration from './RegistrationModel.js';
import BookRoom from './BookRoomModel.js';

class Feedback extends Model {}

Feedback.init(
  {
    id_feedback: {
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
    accessibility_to_warden: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accessibility_to_hostel_committee_members: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    redressal_of_problems: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    room: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mess: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hostel_surroundings: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overall_rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    feedback_message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: 'Feedback',
    tableName: 'feedback',
    freezeTableName: true,
  }
);

Feedback.belongsTo(Registration, { foreignKey: 'id_user', as: 'user' });
Feedback.belongsTo(BookRoom, { foreignKey: 'id_user', targetKey: 'id_user', as: 'bookedRoom' });

export default Feedback;
