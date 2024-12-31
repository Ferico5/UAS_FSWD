import Registration from '../models/RegistrationModel.js';

export const updateUser = async(req, res) => {
    try {
        await Registration.update(req.body, {
            where: {
                id_user: req.params.id_user
            }
        })
        res.status(200).json({msg: 'User Updated!'})
    } catch (error) {
        console.log(error.message)
    }
}