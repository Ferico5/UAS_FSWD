import ComplaintAction from '../models/ComplaintActionModel.js';

export const addRemarkComplaintByIdComplaint = async (req, res) => {
  try {
    const existingRemark = await ComplaintAction.findOne({
        where: {
            register_complaint_id: req.body.register_complaint_id
        }
    })

    if (existingRemark) {
        return res.status(400).json({msg: 'Remark is already exist for this complaint'})
    }

    await ComplaintAction.create(req.body);
    res.status(201).json({ msg: 'Remark Added!' });
  } catch (error) {
    console.log(error.message);
  }
};

export const getRemarkComplaintByIdComplaint = async (req, res) => {
  try {
    const { register_complaint_id } = req.params;
    const response = await ComplaintAction.findOne({
      where: {
        register_complaint_id: register_complaint_id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRemarkComplaintByIdComplaint = async (req, res) => {
  const { register_complaint_id } = req.params;
  const { complaint_remark } = req.body;

  try {
    const response = await ComplaintAction.update(
      {
        complaint_remark,
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
