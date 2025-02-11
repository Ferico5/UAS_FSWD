import RegisterComplaint from '../models/RegisterComplaintModel.js';
import Registration from '../models/RegistrationModel.js';
import BookRoom from '../models/BookRoomModel.js';

export const countComplaint = async (req, res) => {
  try {
    const count = await RegisterComplaint.count();
    res.status(200).json({ count });
  } catch (error) {
    console.log(error.message);
  }
};

export const countNewComplaint = async (req, res) => {
  try {
    const count = await RegisterComplaint.count({
      where: {
        complaint_status: 'Unprocessed',
      },
    });
    res.status(200).json({ count });
  } catch (error) {
    console.log(error.message);
  }
};

export const countInProcessComplaint = async (req, res) => {
  try {
    const count = await RegisterComplaint.count({
      where: {
        complaint_status: 'In Process',
      },
    });
    res.status(200).json({ count });
  } catch (error) {
    console.log(error.message);
  }
};

export const countClosedComplaint = async (req, res) => {
  try {
    const count = await RegisterComplaint.count({
      where: {
        complaint_status: 'Closed',
      },
    });
    res.status(200).json({ count });
  } catch (error) {
    console.log(error.message);
  }
};

export const addRegisterComplaint = async (req, res) => {
  try {
    // Ambil data dari body
    const { id_user, room_no, complaint_type, explain_complaint, complaint_status } = req.body;

    // Cek apakah user dan room valid
    const user = await Registration.findByPk(id_user); // Cari user berdasarkan id_user
    const room = await BookRoom.findOne({ where: { room_no, id_user } });

    // Pastikan user dan room ada
    if (!user || !room) {
      return res.status(404).json({ msg: 'User atau Room tidak ditemukan' });
    }

    // Buat complaint baru
    const complaint = await RegisterComplaint.create({
      id_user,
      room_no,
      complaint_type,
      explain_complaint,
      complaint_status,
    });

    // Kirim response
    res.status(201).json({
      msg: 'Register Complaint Successful!',
      complaint,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server Error' });
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
        complaint_status: 'Unprocessed',
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getInProcessRegisterComplaint = async (req, res) => {
  try {
    const response = await RegisterComplaint.findAll({
      where: {
        complaint_status: 'In Process',
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getClosedRegisterComplaint = async (req, res) => {
  try {
    const response = await RegisterComplaint.findAll({
      where: {
        complaint_status: 'Closed',
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getDetailComplaintByIdComplaint = async (req, res) => {
  const { register_complaint_id } = req.params;
  try {
    const response = await RegisterComplaint.findOne({
      where: {
        register_complaint_id: register_complaint_id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateComplaintStatusByIdComplaint = async (req, res) => {
  const { register_complaint_id } = req.params;
  const { complaint_status } = req.body;

  try {
    const response = await RegisterComplaint.update(
      {
        complaint_status,
      },
      {
        where: {
          register_complaint_id: register_complaint_id,
        },
      }
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
