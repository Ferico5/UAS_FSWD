import { DataTypes, Model } from 'sequelize';
import db from '../config/Database.js';
import Registration from './RegistrationModel.js';
import RoomInfo from './RoomInfoModel.js';

class BookRoom extends Model {}

BookRoom.init(
  {
    id_book: {
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
    food_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stay_from: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'BookRoom',
    tableName: 'book_room',
    freezeTableName: true,
  }
);

export default BookRoom;