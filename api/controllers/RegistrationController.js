import Registration from '../models/RegistrationModel.js';

export const createUser = async (req, res) => {
  try {
    const existingEmail = await Registration.findOne({
      where: {
        email: req.body.email
      }
    })

    if (existingEmail) {
      return res.status(400).json({msg: 'Email is already exists!'})
    }

    await Registration.create(req.body);
    res.status(201).json({ msg: 'User Created!' });
  } catch (error) {
    console.log(error.message);
  }
};

export const countUser = async (req, res) => {
  try {
    const count = await Registration.count({
      where: {
        role: 'user'
      }
    })
    res.status(200).json({count})
  } catch (error) {
    console.log(error.message)
  }
}

export const getUser = async (req, res) => {
  try {
    const response = await Registration.findAll({
      where: {
        role: 'user'
      }
    })
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
  }
}

export const getUserById = async(req, res) => {
  try {
    const response = await Registration.findOne({
      where: {
        id_user: req.params.id_user
      }
    })
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
  }
}