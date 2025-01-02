import { DataTypes, Model } from 'sequelize';
import db from '../config/Database.js';

class RoomInfo extends Model {}

RoomInfo.init({
  id_room: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  room_no: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  seater: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fees_per_month: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remaining_seater: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'RoomInfo',
  tableName: 'room_info',
  freezeTableName: true,
});

export default RoomInfo