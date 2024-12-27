import Registration from '../models/RegistrationModel.js';

// export const getUsers = async(req, res) => {
//     try {
//         const response = await User.findAll()
//         res.status(200).json(response)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

export const getUserLogin = async(req, res) => {
  const {email, password} = req.body

    try {
        const response = await Registration.findOne({
            where: {
                email: email,
                password: password
            }
        })
        
        if (response) {
            res.status(200).json({ msg: 'Login successful', response: response });
        } else {
            res.status(400).json({ msg: 'Invalid email or password' });
        }
      } catch (error) {
        console.log(error.message)
    }
}