import { Sequelize, Op } from 'sequelize';
import Feedback from '../models/FeedbackModel.js';
import BookRoom from '../models/BookRoomModel.js';
import RoomInfo from '../models/RoomInfoModel.js';
import cron from 'node-cron';
import { addMonths } from 'date-fns';

// Cron job: cek setiap menit
cron.schedule('* * * * *', async () => {
  try {
    const today = new Date();
    const completedBookings = await BookRoom.findAll({
      where: {
        end_date: { [Op.lte]: today },
        processed: false,
      },
    });

    for (const booking of completedBookings) {
      const { room_no, id_book } = booking;

      await RoomInfo.update({ remaining_seater: Sequelize.literal('remaining_seater + 1') }, { where: { room_no } });

      await BookRoom.update(
        { processed: true },
        { where: { id_book } }
      );
    }
  } catch (error) {
    console.error('Error processing completed bookings:', error.message);
  }
});

export const addBookRoom = async (req, res) => {
  try {
    const { stay_from, duration, room_no } = req.body;
    // const end_date = addMonths(new Date(stay_from), parseInt(duration));
    const end_date = new Date(new Date(stay_from).getTime() + 1 * 60 * 1000);

    await BookRoom.create({ ...req.body, end_date });
    const updatedRoom = await RoomInfo.update(
      { remaining_seater: Sequelize.literal('remaining_seater - 1') },
      { where: { room_no } }
    );

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
