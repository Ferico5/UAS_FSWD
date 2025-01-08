import { Sequelize } from 'sequelize';
import Feedback from '../models/FeedbackModel.js';
import BookRoom from '../models/BookRoomModel.js';
import RoomInfo from '../models/RoomInfoModel.js';

export const addBookRoom = async (req, res) => {
  try {
    await BookRoom.create(req.body);
    const { room_no } = req.body;
    const updatedRoom = await RoomInfo.update(
      { remaining_seater: Sequelize.literal('remaining_seater - 1') }, // Mengurangi 1 dari remaining_seater
      { where: { room_no } } // Kondisi pencarian berdasarkan room_no
    );
    // Jika tidak ada kamar yang diperbarui
    if (updatedRoom[0] === 0) {
      return res.status(404).json({ msg: 'Room not found!' });
    }

    res.status(201).json({ msg: 'Successfully Booked Room!' });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBookRoomByIdUser = async (req, res) => {
  try {
    const { id_user } = req.params;
    const response = await BookRoom.findAll({
      where: {
        id_user: id_user,
      },
      include: [
        {
          model: Feedback,
          attributes: ['id_feedback'], // Ambil hanya ID feedback untuk efisiensi
        },
      ],
    });

    // Tambahkan properti has_feedback
    const bookingsWithFeedback = response.map((booking) => ({
      ...booking.toJSON(),
      has_feedback: booking.Feedback !== null, // True jika ada feedback
    }));

    res.status(200).json(bookingsWithFeedback);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

BookRoom.hasOne(Feedback, { foreignKey: 'id_book' });
