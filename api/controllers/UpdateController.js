import Registration from '../models/RegistrationModel.js';

export const updateAdmin = async (req, res) => {
  try {
    const { full_name, contact_no, email, current_password, new_password } = req.body;

    // Cari user berdasarkan ID
    const user = await Registration.findOne({
      where: { id_user: req.params.id_user },
    });

    if (!user) {
      return res.status(404).json({ msg: 'User not found!' });
    }

    if (current_password && !new_password) {
      if (user.password !== current_password) {
        return res.status(400).json({ msg: 'Current password is incorrect!' });
      }
    }

    // Jika current_password dan new_password ada, lakukan validasi untuk admin
    if (current_password && new_password) {
      if (user.password !== current_password) {
        return res.status(400).json({ msg: 'Current password is incorrect!' });
      }

      // Update password jika validasi berhasil
      await Registration.update({ password: new_password }, { where: { id_user: req.params.id_user } });
    }

    // Perbarui data profil (hanya nama, kontak, email)
    await Registration.update({ full_name, contact_no, email }, { where: { id_user: req.params.id_user } });

    res.status(200).json({ msg: 'Profile updated successfully!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'An error occurred while updating the profile.' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { full_name, contact_no, email, current_password, new_password, new_password_confirmation } = req.body;

    // Cari user berdasarkan ID
    const user = await Registration.findOne({
      where: { id_user: req.params.id_user },
    });

    if (!user) {
      return res.status(404).json({ msg: 'User not found!' });
    }

    // Verifikasi password jika user mengirimkan current_password
    if (current_password) {
      if (user.password !== current_password) {
        return res.status(400).json({ msg: 'Current password is incorrect!' });
      }
    }

    // Jika ada new_password dan new_password_confirmation, verifikasi password dan perbarui
    if (new_password && new_password_confirmation) {
      if (new_password !== new_password_confirmation) {
        return res.status(400).json({ msg: 'New password and confirm password do not match!' });
      }

      // Update password jika validasi berhasil
      await Registration.update({ password: new_password }, { where: { id_user: req.params.id_user } });
    }

    // Perbarui data profil (hanya nama, kontak, email)
    await Registration.update({ full_name, contact_no, email }, { where: { id_user: req.params.id_user } });

    res.status(200).json({ msg: 'Profile updated successfully!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'An error occurred while updating the profile.' });
  }
};

export const verifyPassword = async (req, res) => {
  const { id_user, current_password } = req.body;
  try {
    const user = await Registration.findOne({
      where: { id_user },
    });

    if (user && user.password === current_password) {
      res.status(200).json({ valid: true });
    } else {
      res.status(200).json({ valid: false });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Error verifying password' });
  }
};
