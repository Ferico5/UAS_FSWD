import RegisterComplaint from '../models/RegisterComplaintModel.js';

export const addRegisterComplaint = async (req, res) => {
  try {
    await RegisterComplaint.create(req.body);
    res.status(201).json({ msg: 'Register Complaint Successful!' });
  } catch (error) {
    console.log(error.message);
  }
};

export const getRegisterComplaintByIdUser = async (req, res) => {
  try {
    const { id_user } = req.params;
    const response = await RegisterComplaint.findAll({
      where: {
        id_user: id_user,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRegisterComplaint = async (req, res) => {
  try {
    const response = await RegisterComplaint.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUnprocessedRegisterComplaint = async (req, res) => {
  try {
    const response = await RegisterComplaint.findAll({
      where: {
        complaint_status: 'Unprocessed'
      }
    })
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
  }
}

export const getInProcessRegisterComplaint = async (req, res) => {
  try {
    const response = await RegisterComplaint.findAll({
      where: {
        complaint_status: 'In Process'
      }
    })
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
  }
}

export const getClosedRegisterComplaint = async (req, res) => {
  try {
    const response = await RegisterComplaint.findAll({
      where: {
        complaint_status: 'Closed'
      }
    })
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
  }
}

// export const getRoomNoByUser = async (req, res) => {
//   try {
//     const { id_user } = req.params;

//     // Cari user dan room_no terkait
//     const user = await Registration.findOne({
//       where: { id_user },
//       include: [
//         {
//           model: RoomInfo, // Sertakan RoomInfo terkait
//           attributes: ['room_no'], // Hanya ambil room_no dari RoomInfo
//         },
//       ],
//     });

//     if (user && user.RoomInfo) {
//       res.status(200).json({ room_no: user.RoomInfo.room_no });
//     } else {
//       res.status(404).json({ msg: 'Room not found for the user' });
//     }
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ msg: 'Error retrieving room number' });
//   }
// };

// export const getRoom = async (req, res) => {
//   try {
//     const response = await RegisterComplaint.findAll()
//     res.status(200).json(response)
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// export const getRoomByRoomNo = async(req, res) => {
//   try {
//     const response = await RegisterComplaint.findOne({
//       where: {
//         room_no: req.params.room_no
//       }
//     });
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const updateRoom = async(req, res) => {
//   try {
//     await RegisterComplaint.update(req.body, {
//       where: {
//         room_no: req.params.room_no
//       }
//     })
//     res.status(200).json({msg: 'RegisterComplaint Updated!'})
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// export const deleteRoom = async(req, res) => {
//   try {
//     await RegisterComplaint.destroy({
//       where: {
//         id_room: req.params.id_room
//       }
//     })
//     res.status(200).json({msg: 'RegisterComplaint Deleted!'})
//   } catch (error) {
//     console.log(error.message)
//   }
// }
