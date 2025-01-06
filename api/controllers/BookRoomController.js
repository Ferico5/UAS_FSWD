import Feedback from '../models/FeedbackModel.js';
import BookRoom from '../models/BookRoomModel.js';

export const addBookRoom = async (req, res) => {
  try {
    await BookRoom.create(req.body);
    res.status(201).json({ msg: 'Successfully Booking Room!' });
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