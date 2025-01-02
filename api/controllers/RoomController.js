import Room from '../models/RoomInfoModel.js';

export const addRoom = async (req, res) => {
  try {
    await Room.create(req.body);
    res.status(201).json({ msg: 'Room Added!' });
  } catch (error) {
    console.log(error.message);
  }
};

export const getRoom = async (req, res) => {
  try {
    const response = await Room.findAll()
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
  }
}

export const getRoomByRoomNo = async(req, res) => {
  try {
    const response = await Room.findOne({
      where: {
        room_no: req.params.room_no
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRoom = async(req, res) => {
  try {
    await Room.update(req.body, {
      where: {
        id_room: req.params.id_room
      }
    })
    res.status(200).json({msg: 'Room Updated!'})
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteRoom = async(req, res) => {
  try {
    await Room.destroy({
      where: {
        id_room: req.params.id_room
      }
    })
    res.status(200).json({msg: 'Room Deleted!'})
  } catch (error) {
    console.log(error.message)
  }
}