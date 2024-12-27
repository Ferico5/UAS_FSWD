import Registration from '../models/RegistrationModel.js';

// export const getUsers = async(req, res) => {
//     try {
//         const response = await User.findAll()
//         res.status(200).json(response)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export const getUserById = async(req, res) => {
//     try {
//         const response = await User.findOne({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.status(200).json(response)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

export const createUser = async (req, res) => {
  try {
    await Registration.create(req.body);
    res.status(201).json({ msg: 'User Created!' });
  } catch (error) {
    console.log(error.message);
  }
};
