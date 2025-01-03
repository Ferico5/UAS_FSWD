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
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
