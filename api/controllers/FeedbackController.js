import Feedback from '../models/FeedbackModel.js';
import Registration from '../models/RegistrationModel.js';
import BookRoom from '../models/BookRoomModel.js';

export const countFeedback = async (req, res) => {
  try {
    const count = await Feedback.count()
    res.status(200).json({count})
  } catch (error) {
    console.log(error.message)
  }
};

export const addFeedback = async (req, res) => {
  try {
    const response = await Feedback.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll({
      include: [
        {
          model: Registration,
          as: 'user',
          attributes: ['full_name'],
        },
        {
          model: BookRoom,
          as: 'bookedRoom',
          attributes: ['room_no'],
        },
      ],
    });

    const uniqueFeedbacks = feedbacks.filter((feedback, index, self) =>
      index === self.findIndex((f) => f.id_feedback === feedback.id_feedback)
    );
    res.status(200).json(uniqueFeedbacks);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Failed to fetch feedbacks.' });
  }
};

export const getFeedbackById = async (req, res) => {
  const { id_feedback } = req.params;
  try {
    const feedback = await Feedback.findOne({
      where: {
        id_feedback: id_feedback,
      },
      include: [
        {
          model: Registration,
          as: 'user',
          attributes: ['full_name'],
        },
        {
          model: BookRoom,
          as: 'bookedRoom',
          attributes: ['room_no'],
        },
      ],
    });

    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }

    res.status(200).json(feedback);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Failed to fetch feedback details.' });
  }
};
