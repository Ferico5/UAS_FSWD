import Room from '../models/RoomInfoModel.js';

export const countRoom = async(req, res) => {
  try {
    const count = await Room.count()
    res.status(200).json({count})
  } catch (error) {
    console.log(error.message)
  }
}

export const addRoom = async (req, res) => {
  try {
    // Cek apakah room_no sudah ada
    const existingRoom = await Room.findOne({
      where: {
        room_no: req.body.room_no
      }
    });

    if (existingRoom) {
      return res.status(400).json({ msg: 'Room number already exists!' });
    }

    // Jika room_no belum ada, tambahkan data baru
    await Room.create(req.body);
    res.status(201).json({ msg: 'Room Added!' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Something went wrong!' });
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
        room_no: req.params.room_no
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
        room_no: req.params.room_no
      }
    })
    res.status(200).json({msg: 'Room Deleted!'})
  } catch (error) {
    console.log(error.message)
  }
}