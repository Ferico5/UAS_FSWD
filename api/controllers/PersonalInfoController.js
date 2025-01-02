import PersonalInfo from '../models/PersonalInfoModel.js';

export const addPersonalInfo = async (req, res) => {
  try {
    await PersonalInfo.create(req.body);
    res.status(201).json({ msg: 'Successfully Created New Personal Info!' });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPersonalInfoByIdUser = async (req, res) => {
  try {
    const { id_user } = req.params;
    const response = await PersonalInfo.findAll({
      where: {
        id_user: id_user,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
